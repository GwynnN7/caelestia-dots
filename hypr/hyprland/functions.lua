local vars = require("variables")

local function wsaction(action, range, i)
    return function()
        local activews = hl.get_active_workspace()
        if activews then
            local id = activews.id
            local s  = (i - 1) * 10 + (id % 10)
            local t  = math.floor((id - 1) / 10) * 10 + i
            local z  = (range == "group") and s or t

            if action == "move" then
                return hl.dispatch(hl.dsp.window.move({ workspace = z }))
            else
                return hl.dispatch(hl.dsp.focus({ workspace = z }))
            end
        end
    end
end

local function resize_by_screen(x, y)
    local screen = hl.get_active_monitor()
    if screen and type(screen.width) == "number" and type(screen.height) == "number" then
        if not (x == 0 and y == 0) then
            local w = (x and x > 0) and math.floor(screen.width * x / 100) or screen.width
            local h = (y and y > 0) and math.floor(screen.height * y / 100) or screen.height
            return { x = w, y = h, relative = false }
        end
    end
end

local function resize_active_window(x, y)
    local win = hl.get_active_window()
    if win and win.size then
        local w = (win.size.x * (x / 100)) or 800
        local h = (win.size.y * (y / 100)) or 600

        return { x = w, y = h, relative = true }
    end
end

local function resizer(window, pattern, x_percent, y_percent, actions, exact)
    if (window and window.title) and string.find(window.title, pattern, 1, exact) then
        local disp = (type(actions) == "table") and actions or { actions }
        for _, x in ipairs(disp) do
            hl.dispatch(x)
        end

        hl.dispatch(hl.dsp.window.resize(resize_by_screen(x_percent, y_percent)))
        hl.dispatch(hl.dsp.window.set_prop({ prop = "keep_aspect_ratio", value = "true" }))
    end
end

local function move_actions(win)
    local screen = hl.get_active_monitor()

    if screen and screen.width and screen.height and win and win.size then
        local monitor_height = screen.height / screen.scale
        local monitor_width  = screen.width / screen.scale

        local scale_factor   = (monitor_height / 4) / win.size.y

        local target_width   = win.size.x * scale_factor
        local target_height  = win.size.y * scale_factor

        local x_resize       = math.floor(math.max(200, target_width))
        local y_resize       = math.floor(math.max(150, target_height))

        local offset         = math.min(monitor_width, monitor_height) * 0.03

        local move_x         = math.floor(screen.x + monitor_width - x_resize - offset)
        local move_y         = math.floor(screen.y + monitor_height - y_resize - offset)

        return {
            hl.dsp.window.resize({ x = x_resize, y = y_resize, window = win }),
            hl.dsp.window.move({ x = move_x, y = move_y, relative = false, window = win }),
        }
    end
end

local function toggle_special_ws(action)
    return function()
        if action == "communication" then
            local active_ws = hl.get_active_special_workspace() or hl.get_active_workspace()
            
            if active_ws and active_ws.name == "special:communication" then
                return hl.dispatch(hl.dsp.exec_cmd("caelestia toggle communication"))
            elseif active_ws and active_ws.name == "special:music" then
                return hl.dispatch(hl.dsp.exec_cmd("caelestia toggle music"))
            else
                return hl.dispatch(hl.dsp.exec_cmd("caelestia toggle communication"))
            end
        else
            return hl.dispatch(hl.dsp.exec_cmd("caelestia toggle " .. action))
        end
    end
end



local saved_ratios = {}
local MAXIMIZED_THRESHOLD = 1808
local BASE_WIDTH = 1823

local function toggle_maximize()
    return function()
        local win = hl.get_active_window()
        if not (win and win.address and win.size) then return end

        local current_width = win.size.x
        local address = win.address
        if current_width >= MAXIMIZED_THRESHOLD then
            local saved_ratio = saved_ratios[address]

            if saved_ratio then
                hl.dispatch(hl.dsp.layout("colresize " .. saved_ratio))
                saved_ratios[address] = nil
            else
                hl.dispatch(hl.dsp.layout("colresize 0.5"))
            end
        else
            local current_ratio = string.format("%.2f", current_width / BASE_WIDTH)
            saved_ratios[address] = current_ratio

            hl.dispatch(hl.dsp.window.fullscreen({ mode = "maximized" }))
        end
    end
end


local PREFERRED_PLAYERS = { "tidal-hifi", "zen-bin", "spotify", "celluloid", "mpv", "vlc" }

local function media_volume(direction)
    return function()
        os.execute("pw-play /usr/share/sounds/freedesktop/stereo/audio-volume-change.oga &")

        local sinks = {}
        local current_id, current_name, current_vol
        
        local handle = io.popen("pactl list sink-inputs")
        if handle then
            for line in handle:lines() do
                local id = line:match("^Sink Input #(%d+)")
                if id then
                    if current_id then
                        table.insert(sinks, { id = current_id, name = current_name or "Unknown", vol = current_vol or 0 })
                    end
                    current_id = id
                    current_name = nil
                    current_vol = nil
                elseif current_id then
                    local v = line:match("Volume:.-(%d+)%%")
                    if v and not current_vol then 
                        current_vol = tonumber(v) 
                    end
                    
                    local bin = line:match('application%.process%.binary = "(.-)"')
                    if bin then 
                        current_name = bin 
                    elseif not current_name then
                        local app = line:match('application%.name = "(.-)"')
                        if app then current_name = app end
                    end
                end
            end
            if current_id then
                table.insert(sinks, { id = current_id, name = current_name or "Unknown", vol = current_vol or 0 })
            end
            handle:close()
        end

        local target_id, target_name, target_vol
        for _, player in ipairs(PREFERRED_PLAYERS) do
            for _, sink in ipairs(sinks) do
                if sink.name:lower():find(player:lower(), 1, true) then
                    target_id = sink.id
                    target_name = sink.name
                    target_vol = sink.vol
                    break
                end
            end
            if target_id then break end
        end

        if target_id then
            local new_vol = direction == "+" 
                and math.min(150, target_vol + 5) 
                or math.max(0, target_vol - 5)

            local display_name = target_name:gsub("^%l", string.upper)

            os.execute(string.format("pactl set-sink-input-volume %s %d%% &", target_id, new_vol))
            os.execute(string.format(
                'caelestia shell toaster info "Media Player" "%s Volume %d%%" music_note &', 
                display_name, new_vol
            ))
        else
            os.execute("wpctl set-mute @DEFAULT_AUDIO_SINK@ 0 &")
            if direction == "+" then
                os.execute("wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume -l " .. (vars.volumeMax / 100) .. " @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%+" .. " &")
            else
                os.execute("wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%-" .. " &")
            end
        end
    end
end



return {
    resizer              = resizer,
    resize_by_screen     = resize_by_screen,
    resize_active_window = resize_active_window,
    wsaction             = wsaction,
    move_actions         = move_actions,
    toggle_special_ws    = toggle_special_ws,
    toggle_maximize		 = toggle_maximize,
    media_volume		 = media_volume,
}

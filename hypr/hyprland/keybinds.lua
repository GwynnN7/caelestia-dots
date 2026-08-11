local vars = require("variables")
local fn   = require("utils.functions")


-- Flags
local locked           = { locked = true }
local hold             = { long_press = true }
local mouse            = { mouse = true }
local release          = { release = true }
local repeating        = { repeating = true }
local locked_repeating = { locked = true, repeating = true }

local function normalise_keybind(key)
    return key:gsub("%s+", ""):lower()
end

local function valid_keybind(key)
    return type(key) == "string" and key:match("%S") ~= nil
end

local function repeating_unless_mouse(key)
    return not normalise_keybind(key):find("mouse", 1, true) and repeating or nil
end

local function flatten_keybinds(keybinds, keys)
    keys = keys or {}

    if type(keybinds) == "table" then
        for _, keybind in pairs(keybinds) do
            flatten_keybinds(keybind, keys)
        end
    elseif valid_keybind(keybinds) then
        keys[#keys + 1] = keybinds
    end

    return keys
end

local function create_bind(keybinds, action, flags)
    local get_flags = type(flags) == "function" and flags or function()
        return flags
    end

    for _, key in ipairs(flatten_keybinds(keybinds)) do
        hl.bind(key, action, get_flags(key))
    end
end

local function combine(base, suffix)
    return valid_keybind(base) and base .. " + " .. suffix or nil
end


-- Launcher
local launcher_default = normalise_keybind("SUPER + SUPER_L")
create_bind(
    vars.kbLauncher,
    hl.dsp.global("caelestia:launcher"),
    function(key)
        return normalise_keybind(key) == launcher_default and release or nil
    end
)

-- Misc
create_bind(vars.kbSession, hl.dsp.global("caelestia:session"))
create_bind(vars.kbShowSidebar, hl.dsp.global("caelestia:sidebar"))
create_bind(vars.kbClearNotifs, hl.dsp.global("caelestia:clearNotifs"), locked)
create_bind(vars.kbShowPanels, hl.dsp.global("caelestia:showall"))
create_bind(vars.kbLock, hl.dsp.global("caelestia:lock"))

-- Plugins
local smw = hl.plugin.split_monitor_workspaces
local has_scrolloverview = hl.plugin.scrolloverview ~= nil
local has_hymission = hl.plugin.hymission ~= nil

if has_hymission then
    create_bind(vars.kbOverview, function() hl.plugin.hymission.toggle("onlycurrentworkspace") end)
elseif has_scrolloverview then
    create_bind(vars.kbOverview, function() hl.plugin.scrolloverview.overview("toggle") end)
else
    create_bind(vars.kbOverview, hl.dsp.global("caelestia:workspaceOverview"))
end

if has_scrolloverview and has_hymission then
    create_bind(vars.kbOverview2, function() hl.plugin.scrolloverview.overview("toggle") end)
else
    create_bind(vars.kbOverview2, hl.dsp.global("caelestia:workspaceOverview"))
end

-- Restore lock
create_bind(vars.kbRestoreLock, function()
    hl.dispatch(hl.dsp.exec_cmd("caelestia shell -d"))
    hl.dispatch(hl.dsp.global("caelestia:lock"))
end)

-- Kill/restart
create_bind(vars.kbKillRestart, hl.dsp.exec_cmd("qs -c caelestia kill"), release)
create_bind(
    vars.kbKillRestart,
    hl.dsp.exec_cmd("qs -c caelestia kill; sleep .1; caelestia shell -d"),
    release
)

-- Monitor
create_bind(combine(vars.kbFocus, "TAB"), hl.dsp.focus({ monitor = "+1" }))
create_bind(combine(vars.kbMove, "TAB"), function() return smw.change_monitor("next") end)
create_bind(combine(vars.kbFocus, "CTRL + TAB"), hl.dsp.workspace.swap_monitors({ monitor1 = "0", monitor2 = "+1" }))

-- Workspace and Windows
for i = 1, 8 do
    local key = tostring(i)
    create_bind(combine(vars.kbFocus, key), function() return smw.workspace(i) end, repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), function() return smw.move_to_workspace(i) end, repeating_unless_mouse)
end

for _, key in ipairs({ "mouse_up", "up", "W", }) do
    create_bind(combine(vars.kbFocus, key), fn.focus_workspace("-1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), function() return smw.move_to_workspace("-1") end, repeating_unless_mouse)
    create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = "up" }), repeating_unless_mouse)
end

for _, key in ipairs({ "mouse_down", "down", "S" }) do
    create_bind(combine(vars.kbFocus, key), fn.focus_workspace("+1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), function() return smw.move_to_workspace("+1") end, repeating_unless_mouse)
    create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = "down" }), repeating_unless_mouse)
end

for _, key in ipairs({ "left", "right", "up", "down" }) do
    create_bind(combine(vars.kbFocusWin, key), hl.dsp.focus({ direction = key }), repeating_unless_mouse)
    if key == "up" or key == "down" then
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = key }), repeating_unless_mouse)
    elseif key == "left" or key == "right" then
        local abbr = key == "left" and "l" or "r"
        create_bind(combine(vars.kbFocus, key), hl.dsp.layout("focus " .. abbr), repeating_unless_mouse)
        create_bind(combine(vars.kbMove, key), hl.dsp.layout("swapcol " .. abbr), repeating_unless_mouse)
        local direction = key == "left" and "prev" or "next"
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.layout("consume_or_expel " .. direction), repeating_unless_mouse)
    end
end

for _, key in ipairs({ "W", "A", "S", "D" }) do
    local direction = key == "W" and "up" or key == "S" and "down" or key == "A" and "left" or "right"
    create_bind(combine(vars.kbFocusWin, key), hl.dsp.focus({ direction = direction }), repeating_unless_mouse)

    if key == "A" or key == "D" then
        local abbr = key == "A" and "l" or "r"
        create_bind(combine(vars.kbFocus, key), hl.dsp.layout("focus " .. abbr), repeating_unless_mouse)
        create_bind(combine(vars.kbMove, key), hl.dsp.layout("swapcol " .. abbr), repeating_unless_mouse)
        local direction = key == "A" and "prev" or "next"
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.layout("consume_or_expel " .. direction), repeating_unless_mouse)
    end
end

-- Special workspace toggles
create_bind(vars.kbScratchpad, fn.toggle_special_ws("specialws"))
create_bind(combine("SHIFT", vars.kbScratchpad), function() return smw.move_to_workspace_silent("special") end)
create_bind(vars.kbSystemMonitorWs, fn.toggle_special_ws("sysmon"))
create_bind(vars.kbSpecialWs, fn.toggle_special_ws("music"), hold)
create_bind(vars.kbSpecialWs, fn.toggle_special_ws("communication"))
create_bind(combine("SHIFT", vars.kbCloseWindow), function() return smw.move_to_workspace("e+0") end)

-- Resize and drag
create_bind(vars.kbResizeColShrink, hl.dsp.layout("colresize -0.15"))
create_bind(vars.kbResizeColGrow, hl.dsp.layout("colresize +0.15"))
create_bind(vars.kbResizeColShrinkConf, hl.dsp.layout("colresize -conf"))
create_bind(vars.kbResizeColGrowConf, hl.dsp.layout("colresize +conf"))
create_bind(vars.kbResizeWinShrink, fn.resize_active_window(-5, 0), repeating_unless_mouse)
create_bind(vars.kbResizeWinGrow, fn.resize_active_window(5, 0), repeating_unless_mouse)
create_bind("SUPER + mouse:272", hl.dsp.window.drag(), mouse)
create_bind("SUPER + mouse:273", hl.dsp.window.resize(), mouse)

-- Window utility
create_bind(vars.kbPinWindow, hl.dsp.window.pin())
create_bind(vars.kbFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }))
create_bind(vars.kbBorderless, hl.dsp.window.fullscreen({ mode = "maximized" }))
create_bind(vars.kbCloseWindow, hl.dsp.window.close())
create_bind(vars.kbFloating, hl.dsp.window.float())

create_bind(vars.kbCenter, function()
    local win = hl.get_active_window()
    if not win then return end

    if win.floating then
        hl.dispatch(hl.dsp.window.resize(fn.resize_by_screen(55, 70)))
        hl.dispatch(hl.dsp.window.center())
    else
        hl.dispatch(hl.dsp.layout("fit expand"))
    end
end)

create_bind(vars.kbCenter, function()
    local win = hl.get_active_window()
    if not win then return end

    if win.floating then
       local pip = fn.move_actions(win) or {}
       table.insert(pip, hl.dsp.window.pin({ window = "address:" .. win.address }))
       for _, action in ipairs(pip) do
           hl.dispatch(action)
       end
    else
        hl.config({
            scrolling = {
                focus_fit_method = (hl.get_config("scrolling.focus_fit_method") == 0)
            }
        }) 
    end
end, hold)

-- Apps
create_bind(vars.kbTerminal, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal))
create_bind(vars.kbBrowser, hl.dsp.exec_cmd("app2unit -- " .. vars.browser))
create_bind(vars.kbFileExplorer, hl.dsp.exec_cmd("app2unit -- " .. vars.fileExplorer))
create_bind(vars.kbYazi, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal .. ' fish -C "y"'))
create_bind(vars.kbAudioSettings, hl.dsp.exec_cmd("app2unit -- " .. vars.audioSettings))

-- Utilities
create_bind(vars.kbScreenshot, hl.dsp.exec_cmd("caelestia screenshot"), locked)
create_bind(vars.kbScreenshotFreeze, hl.dsp.global("caelestia:screenshotFreeze"))
create_bind(vars.kbScreenshotRegion, hl.dsp.global("caelestia:screenshot"))
create_bind(vars.kbRecord, hl.dsp.exec_cmd("caelestia record"))
create_bind(vars.kbRecordSound, hl.dsp.exec_cmd("caelestia record -s"))
create_bind(vars.kbRecordRegion, hl.dsp.exec_cmd("caelestia record -r"))
create_bind(vars.kbColorPicker, hl.dsp.exec_cmd("hyprpicker -a"))

-- Brightness
create_bind("XF86MonBrightnessUp", hl.dsp.global("caelestia:brightnessUp"), locked)
create_bind("XF86MonBrightnessDown", hl.dsp.global("caelestia:brightnessDown"), locked)

-- Media
create_bind({ "XF86AudioPlay", "XF86AudioPause" }, hl.dsp.global("caelestia:mediaToggle"), locked)
create_bind("XF86AudioNext", hl.dsp.global("caelestia:mediaNext"), locked)
create_bind("XF86AudioPrev", hl.dsp.global("caelestia:mediaPrev"), locked)
create_bind("XF86AudioStop", hl.dsp.global("caelestia:mediaStop"), locked)
create_bind("SUPER + Page_Up", fn.media_volume("+"), locked_repeating)
create_bind("SUPER + Page_Down", fn.media_volume("-"), locked_repeating)

-- Volume
create_bind({"XF86AudioMicMute", "F13"}, hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), locked)
create_bind("XF86AudioMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), locked)
create_bind(
    "XF86AudioRaiseVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume -l " ..
        (vars.volumeMax / 100) .. " @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%+"
    ),
    locked_repeating
)
create_bind(
    "XF86AudioLowerVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%-"
    ),
    locked_repeating
)

-- Utils
create_bind(vars.kbClipboard, hl.dsp.global("caelestia:clipboard"))
create_bind(vars.kbEmoji, hl.dsp.global("caelestia:emoji"))
create_bind(vars.kbAI, hl.dsp.global("caelestia:cortana"))
create_bind(vars.kbSidebarAI, hl.dsp.global("caelestia:cortanaSidebar"))
create_bind(vars.kbKeybinds, hl.dsp.global("caelestia:keybinds"))
create_bind(vars.kbWindows, hl.dsp.global("caelestia:windowSwitcher"))
create_bind(vars.kbWallpaper, hl.dsp.global("caelestia:wallpaper"))
create_bind(combine("ALT", vars.kbClipboard), hl.dsp.exec_cmd("pkill fuzzel || caelestia clipboard -d"))
create_bind(combine("ALT", vars.kbEmoji), hl.dsp.exec_cmd("pkill fuzzel || caelestia emoji -p"))

-- Cortana API
create_bind("SUPER + F1", hl.dsp.exec_cmd("cortana api -act on devices/lamp | cortana notify"), locked)
create_bind("SUPER + F2", hl.dsp.exec_cmd("cortana api -act off devices/lamp | cortana notify"), locked)
create_bind("SUPER + F5", hl.dsp.exec_cmd("cortana api -val 0 settings/automaticmode | cortana notify"), locked)
create_bind("SUPER + F6", hl.dsp.exec_cmd("cortana api -val 1 settings/automaticmode | cortana notify"), locked)

-- Submaps
create_bind(vars.kbSubmap, hl.dsp.submap("passthru"))
hl.define_submap("passthru", function()
    create_bind(vars.kbFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }))
    create_bind(vars.kbTerminal, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal))

    create_bind(vars.kbSubmap, hl.dsp.submap("reset"))
end)

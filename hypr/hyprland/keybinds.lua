local vars = require("variables")
local fn   = require("hyprland.functions")

-- Launcher
hl.bind("SUPER + SUPER_L", hl.dsp.global("caelestia:launcher"), { release = true, description = "Open application launcher" })
hl.bind("SUPER + Space", function()
    hl.plugin.scrolloverview.overview("toggle")
end, { description = "Toggle workspace overview" })
hl.bind("ALT + Tab", function()
    hl.plugin.scrolloverview.overview("toggle")
end, { description = "Toggle workspace overview" })

-- Misc
hl.bind(vars.kbSession, hl.dsp.global("caelestia:session"), { description = "Open session menu" })
hl.bind("SUPER + F3", hl.dsp.global("caelestia:session"), { description = "Open session menu" })
hl.bind(vars.kbShowSidebar, hl.dsp.global("caelestia:sidebar"), { description = "Toggle sidebar" })
hl.bind(vars.kbClearNotifs, hl.dsp.global("caelestia:clearNotifs"), { locked = true, description = "Clear all notifications" })
hl.bind(vars.kbShowPanels, hl.dsp.global("caelestia:showall"), { description = "Show all panels" })
hl.bind(vars.kbLock, hl.dsp.global("caelestia:lock"), { description = "Lock screen" })

-- Restore lock
hl.bind(vars.kbRestoreLock, function()
    hl.dispatch(hl.dsp.exec_cmd("caelestia shell -d"))
    hl.dispatch(hl.dsp.global("caelestia:lock"))
end, { description = "Restore lock screen" })

-- Brightness
hl.bind("XF86MonBrightnessUp", hl.dsp.global("caelestia:brightnessUp"), { locked = true, description = "Increase screen brightness" })
hl.bind("XF86MonBrightnessDown", hl.dsp.global("caelestia:brightnessDown"), { locked = true, description = "Decrease screen brightness" })

-- Media
hl.bind("XF86AudioPlay", hl.dsp.global("caelestia:mediaToggle"), { locked = true, description = "Play or pause media" })
hl.bind("XF86AudioPause", hl.dsp.global("caelestia:mediaToggle"), { locked = true, description = "Pause media" })
hl.bind("XF86AudioNext", hl.dsp.global("caelestia:mediaNext"), { locked = true, description = "Play next media track" })
hl.bind("XF86AudioPrev", hl.dsp.global("caelestia:mediaPrev"), { locked = true, description = "Play previous media track" })
hl.bind("XF86AudioStop", hl.dsp.global("caelestia:mediaStop"), { locked = true, description = "Stop media playback" })

-- Kill/restart
hl.bind("CTRL + ALT + Delete", hl.dsp.exec_cmd("caelestia shell -k"), { release = true, description = "Kill Caelestia shell" })
hl.bind(
    "CTRL + SUPER + Delete",
    hl.dsp.exec_cmd("caelestia shell -k; sleep 1; caelestia shell -d"),
    { release = true, description = "Restart Caelestia shell" }
)

local smw = hl.plugin.split_monitor_workspaces
for i = 1, 8 do
    local key = tostring(i)
    hl.bind(vars.kbFocus .. " + " .. key, function() return smw.workspace(i) end, { description = "Focus workspace " .. key })
    hl.bind(vars.kbMove .. " + " .. key, function() return smw.move_to_workspace(i) end, { description = "Move window to workspace " .. key })
end

-- Go to workspace -1/+1
hl.bind(vars.kbFocus .. " + mouse_up", function() return smw.workspace("+1") end, { description = "Focus next workspace" })
hl.bind(vars.kbFocus .. " + mouse_down", function() return smw.workspace("-1") end, { description = "Focus previous workspace" })
hl.bind(vars.kbFocus .. " + up", function() return smw.workspace("-1") end, { description = "Focus previous workspace" })
hl.bind(vars.kbFocus .. " + down", function() return smw.workspace("+1") end, { description = "Focus next workspace" })
hl.bind(vars.kbFocus .. " + W", function() return smw.workspace("-1") end, { description = "Focus previous workspace" })
hl.bind(vars.kbFocus .. " + S", function() return smw.workspace("+1") end, { description = "Focus next workspace" })

hl.bind(vars.kbFocus .. " + TAB", hl.dsp.focus({ monitor = "+1" }), { description = "Focus next monitor" })
hl.bind(vars.kbMove .. " + TAB", function() return smw.change_monitor("next") end, { description = "Move workspace to next monitor" })

-- Move window to workspace -1/+1
hl.bind(vars.kbMove .. " + mouse_up", function() return smw.move_to_workspace("+1") end, { description = "Move window to next workspace" })
hl.bind(vars.kbMove .. " + mouse_down", function() return smw.move_to_workspace("-1") end, { description = "Move window to previous workspace" })
hl.bind(vars.kbMove .. " + up", function() return smw.move_to_workspace("-1") end, { description = "Move window to previous workspace" })
hl.bind(vars.kbMove .. " + down", function() return smw.move_to_workspace("+1") end, { description = "Move window to next workspace" })
hl.bind(vars.kbMove .. " + W", function() return smw.move_to_workspace("-1") end, { description = "Move window to previous workspace" })
hl.bind(vars.kbMove .. " + S", function() return smw.move_to_workspace("+1") end, { description = "Move window to next workspace" })

-- Window actions
hl.bind(vars.kbFocusWin .. " + up", hl.dsp.focus({ direction = "up" }), { description = "Focus window up" })
hl.bind(vars.kbFocusWin .. " + down", hl.dsp.focus({ direction = "down" }), { description = "Focus window down" })
hl.bind(vars.kbFocusWin .. " + left", hl.dsp.focus({ direction = "left" }), { description = "Focus window left" })
hl.bind(vars.kbFocusWin .. " + right", hl.dsp.focus({ direction = "right" }), { description = "Focus window right" })
hl.bind(vars.kbFocusWin .. " + W", hl.dsp.focus({ direction = "up" }), { description = "Focus window up" })
hl.bind(vars.kbFocusWin .. " + S", hl.dsp.focus({ direction = "down" }), { description = "Focus window down" })
hl.bind(vars.kbFocusWin .. " + A", hl.dsp.focus({ direction = "left" }), { description = "Focus window left" })
hl.bind(vars.kbFocusWin .. " + D", hl.dsp.focus({ direction = "right" }), { description = "Focus window right" })

hl.bind(vars.kbMoveWin .. " + up", hl.dsp.window.move({ direction = "up" }), { description = "Move window up" })
hl.bind(vars.kbMoveWin .. " + down", hl.dsp.window.move({ direction = "down" }), { description = "Move window down" })
hl.bind(vars.kbMoveWin .. " + W", hl.dsp.window.move({ direction = "up" }), { description = "Move window up" })
hl.bind(vars.kbMoveWin .. " + S", hl.dsp.window.move({ direction = "down" }), { description = "Move window down" })

-- Scrolling layouts
hl.bind(vars.kbFocus .. " + right", hl.dsp.layout("focus r"), { description = "Focus right in layout" })
hl.bind(vars.kbFocus .. " + left", hl.dsp.layout("focus l"), { description = "Focus left in layout" })
hl.bind(vars.kbFocus .. " + D", hl.dsp.layout("focus r"), { description = "Focus right in layout" })
hl.bind(vars.kbFocus .. " + A", hl.dsp.layout("focus l"), { description = "Focus left in layout" })

hl.bind(vars.kbMove .. " + right", hl.dsp.layout("swapcol r"), { description = "Swap column right" })
hl.bind(vars.kbMove .. " + left", hl.dsp.layout("swapcol l"), { description = "Swap column left" })
hl.bind(vars.kbMove .. " + D", hl.dsp.layout("swapcol r"), { description = "Swap column right" })
hl.bind(vars.kbMove .. " + A", hl.dsp.layout("swapcol l"), { description = "Swap column left" })

hl.bind(vars.kbMoveWin .. " + left", hl.dsp.layout("consume_or_expel prev"), { description = "Consume or expel previous" })
hl.bind(vars.kbMoveWin .. " + right", hl.dsp.layout("consume_or_expel next"), { description = "Consume or expel next" })
hl.bind(vars.kbMoveWin .. " + A", hl.dsp.layout("consume_or_expel prev"), { description = "Consume or expel previous" })
hl.bind(vars.kbMoveWin .. " + D", hl.dsp.layout("consume_or_expel next"), { description = "Cconsume or expel next" })

hl.bind("SUPER + Minus", hl.dsp.layout("colresize -0.15"), { description = "Decrease column width" })
hl.bind("SUPER + Equal", hl.dsp.layout("colresize +0.15"), { description = "Increase column width" })
hl.bind("SUPER + ALT + left", hl.dsp.layout("colresize -0.15"), { description = "Decrease column width" })
hl.bind("SUPER + ALT + right", hl.dsp.layout("colresize +0.15"), { description = "Increase column width" })
hl.bind("SUPER + ALT + A", hl.dsp.layout("colresize -0.15"), { description = "Decrease column width" })
hl.bind("SUPER + ALT + D", hl.dsp.layout("colresize +0.15"), { description = "Increase column width" })
hl.bind("SUPER + SHIFT + Minus", hl.dsp.layout("colresize -conf"), { description = "Decrease preset column width" })
hl.bind("SUPER + SHIFT + Equal", hl.dsp.layout("colresize +conf"), { description = "Increase preset column width" })
hl.bind("SUPER + ALT + Minus", hl.dsp.window.resize(fn.resize_active_window(-5, 0)), { repeating = true, description = "Decrease active window size" })
hl.bind("SUPER + ALT + Equal", hl.dsp.window.resize(fn.resize_active_window(5, 0)), { repeating = true, description = "Increase active window size" })
hl.bind("SUPER + mouse:272", hl.dsp.window.drag(), { mouse = true, description = "Drag window with mouse" })
hl.bind("SUPER + mouse:273", hl.dsp.window.resize(), { mouse = true, description = "Resize window with mouse" })

hl.bind(vars.kbToggleWindowFloating, hl.dsp.window.float(), { description = "Toggle window floating state" })
hl.bind(vars.kbCenter, function()
    local win = hl.get_active_window()
    if not win then return end

    if win.floating then
        hl.dispatch(hl.dsp.window.resize(fn.resize_by_screen(55, 70)))
        hl.dispatch(hl.dsp.window.center())
    else
        hl.dispatch(hl.dsp.layout("fit visible"))
    end
end, { description = "Center floating window or fit tiled window" })

hl.bind(vars.kbCenter, function()
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
end, { long_press = true, description = "Toggle PIP or focus fit method" })

hl.bind(vars.kbPinWindow, hl.dsp.window.pin(), { description = "Pin floating window" })
hl.bind(vars.kbWindowFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }), { description = "Toggle fullscreen mode" })
hl.bind(vars.kbWindowBorderedFullscreen, fn.toggle_maximize(), { description = "Toggle maximized bordered fullscreen" })
hl.bind(vars.kbCloseWindow, hl.dsp.window.close(), { description = "Close active window" })

-- Special workspace toggles
hl.bind(vars.kbScratchpad, fn.toggle_special_ws("specialws"), { description = "Toggle scratchpad workspace" })
hl.bind("SHIFT + " .. vars.kbScratchpad, function() return smw.move_to_workspace_silent("special") end, { description = "Move window to scratchpad" })
hl.bind(vars.kbSystemMonitorWs, fn.toggle_special_ws("sysmon"), { description = "Toggle system monitor workspace" })
hl.bind("SUPER + F4", fn.toggle_special_ws("sysmon"), { description = "Toggle system monitor workspace" })
hl.bind(vars.kbSpecialWs, fn.toggle_special_ws("music"), { long_press = true, description = "Toggle music workspace" })
hl.bind(vars.kbSpecialWs, fn.toggle_special_ws("communication"), { description = "Toggle communication workspace" })
hl.bind("SHIFT + " .. vars.kbCloseWindow, function() return smw.move_to_workspace("e+0") end, { description = "Move window out of special workspace" })

-- Apps
hl.bind(vars.kbTerminal, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal), { description = "Open terminal" })
hl.bind(vars.kbBrowser, hl.dsp.exec_cmd("app2unit -- " .. vars.browser), { description = "Open web browser" })
hl.bind(vars.kbFileExplorer, hl.dsp.exec_cmd("app2unit -- " .. vars.fileExplorer), { description = "Open file explorer" })
hl.bind(vars.kbYazi, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal .. ' fish -C "y"'), { description = "Open Yazi file manager" })
hl.bind(vars.kbAudioSettings, hl.dsp.exec_cmd("app2unit -- " .. vars.audioSettings), { description = "Open audio settings" })

-- Utilities
hl.bind("Print", hl.dsp.exec_cmd("caelestia screenshot"), { locked = true, description = "Take screenshot" })
hl.bind("SUPER + Print", hl.dsp.global("caelestia:screenshotFreeze"), { locked = true, description = "Take region screenshot" })
hl.bind("SHIFT + ALT + S", hl.dsp.global("caelestia:screenshotFreeze"), { locked = true, description = "Take region screenshot" })
hl.bind("SUPER + ALT + R", hl.dsp.exec_cmd("caelestia record -s"), { description = "Record screen with audio" })
hl.bind("SUPER + SHIFT + R", hl.dsp.exec_cmd("caelestia record"), { description = "Record entire screen" })
hl.bind("SUPER + CTRL + R", hl.dsp.exec_cmd("caelestia record -r"), { description = "Recording region screen" })
hl.bind("SUPER + CTRL + C", hl.dsp.exec_cmd("hyprpicker -a"), { description = "Open color picker" })

-- Volume
hl.bind("XF86AudioMicMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), { locked = true, description = "Toggle microphone mute" })
hl.bind("XF86AudioMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), { locked = true, description = "Toggle audio mute" })
hl.bind(
    "XF86AudioRaiseVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume -l " ..
        (vars.volumeMax / 100) .. " @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%+"
    ),
    { locked = true, repeating = true }
)
hl.bind(
    "XF86AudioLowerVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%-"
    ),
    { locked = true, repeating = true }
)
hl.bind("F13", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), { description = "Toggle microphone mute (F13)" })
hl.bind("SUPER + Page_Up", fn.media_volume("+"), { locked = true, repeating = true, description = "Increase media volume" })
hl.bind("SUPER + Page_Down", fn.media_volume("-"), { locked = true, repeating = true, description = "Decrease media volume" })

-- Clipboard and emoji picker
hl.bind("SUPER + V", hl.dsp.global("caelestia:clipboard"), { description = "Open clipboard history" })
hl.bind("SUPER + Period", hl.dsp.global("caelestia:emoji"), { description = "Open emoji picker" })
hl.bind("SUPER + K", hl.dsp.global("caelestia:keybinds"), { description = "Show active keybinds map" })
hl.bind("SUPER + ALT + V", hl.dsp.exec_cmd("pkill fuzzel || caelestia clipboard -d"), { description = "Clear clipboard history" })
hl.bind("SUPER + ALT + Period", hl.dsp.exec_cmd("pkill fuzzel || caelestia emoji -p"), { description = "Clear emoji history" })

-- Cortana API
hl.bind("SUPER + F1", hl.dsp.exec_cmd("cortana api -act on devices/lamp | cortana notify"), { locked = true, description = "Turn on smart lamp" })
hl.bind("SUPER + F2", hl.dsp.exec_cmd("cortana api -act off devices/lamp | cortana notify"), { locked = true, description = "Turn off smart lamp" })
hl.bind("SUPER + F5", hl.dsp.exec_cmd("cortana api -val 0 settings/automaticmode | cortana notify"), { locked = true, description = "Disable Cortana automatic mode" })
hl.bind("SUPER + F6", hl.dsp.exec_cmd("cortana api -val 1 settings/automaticmode | cortana notify"), { locked = true, description = "Enable Cortana automatic mode" })

-- Submaps
hl.bind("SUPER + Home", hl.dsp.submap("passthru"), { description = "Enter passthru submap mode" })
hl.define_submap("passthru", function()
    hl.bind(vars.kbWindowFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }), { description = "Toggle fullscreen (passthru mode)" })
    hl.bind(vars.kbTerminal, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal), { description = "Open terminal (passthru mode)" })

    hl.bind("SUPER + Home", hl.dsp.submap("reset"), { description = "Exit passthru submap mode" })
end)

-- Testing
hl.bind(
    "SUPER + ALT + F12",
    hl.dsp.exec_cmd(
        "notify-send -u low -i dialog-information-symbolic 'Test notification' " ..
        [["Here's a really long message to test truncation and wrapping\nYou can middle click or flick this notification to dismiss it!"]] ..
        " -a 'Shell' -A 'Test1=I got it!' -A 'Test2=Another action'"
    ),
    { description = "Trigger test notification" }
)
local vars = require("variables")
local fn   = require("hyprland.functions")

-- Launcher
hl.bind("SUPER + SUPER_L", hl.dsp.global("caelestia:launcher"), { release = true })

-- Misc
hl.bind(vars.kbSession, hl.dsp.global("caelestia:session"))
hl.bind("SUPER + F3", hl.dsp.global("caelestia:session"))
hl.bind(vars.kbShowSidebar, hl.dsp.global("caelestia:sidebar"))
hl.bind(vars.kbClearNotifs, hl.dsp.global("caelestia:clearNotifs"), { locked = true })
hl.bind(vars.kbShowPanels, hl.dsp.global("caelestia:showall"))
hl.bind(vars.kbLock, hl.dsp.global("caelestia:lock"))

-- Restore lock
hl.bind(vars.kbRestoreLock, function()
    hl.dispatch(hl.dsp.exec_cmd("caelestia shell -d"))
    hl.dispatch(hl.dsp.global("caelestia:lock"))
end)

-- Brightness
hl.bind("XF86MonBrightnessUp", hl.dsp.global("caelestia:brightnessUp"), { locked = true })
hl.bind("XF86MonBrightnessDown", hl.dsp.global("caelestia:brightnessDown"), { locked = true })

-- Media
hl.bind("XF86AudioPlay", hl.dsp.global("caelestia:mediaToggle"), { locked = true })
hl.bind("XF86AudioPause", hl.dsp.global("caelestia:mediaToggle"), { locked = true })
hl.bind("XF86AudioNext", hl.dsp.global("caelestia:mediaNext"), { locked = true })
hl.bind("XF86AudioPrev", hl.dsp.global("caelestia:mediaPrev"), { locked = true })
hl.bind("XF86AudioStop", hl.dsp.global("caelestia:mediaStop"), { locked = true })

-- Kill/restart
hl.bind("CTRL + ALT + Delete", hl.dsp.exec_cmd("qs -c caelestia kill"), { release = true })
hl.bind(
    "CTRL + SUPER + Delete",
    hl.dsp.exec_cmd("qs -c caelestia kill; sleep .1; caelestia shell -d"),
    { release = true }
)

local smw = hl.plugin.split_monitor_workspaces
for i = 1, 8 do
    local key = tostring(i)
    hl.bind(vars.kbFocus .. " + " .. key, function() return smw.workspace(i) end)
    hl.bind(vars.kbMove .. " + " .. key, function() return smw.move_to_workspace(i) end)
end

-- Go to workspace -1/+1
hl.bind(vars.kbFocus .. " + mouse_up", function() return smw.workspace(-1) end)
hl.bind(vars.kbFocus .. " + mouse_down", function() return smw.workspace(+1) end)
hl.bind(vars.kbFocus .. " + up", function() return smw.workspace(-1) end)
hl.bind(vars.kbFocus .. " + down", function() return smw.workspace(+1) end)
hl.bind(vars.kbFocus .. " + W", function() return smw.workspace(-1) end)
hl.bind(vars.kbFocus .. " + S", function() return smw.workspace(+1) end)

-- Move window to workspace -1/+1
hl.bind(vars.kbMove .. " + mouse_up", function() return smw.move_to_workspace(-1) end)
hl.bind(vars.kbMove .. " + mouse_down", function() return smw.move_to_workspace(+1) end)
hl.bind(vars.kbMove .. " + up", function() return smw.move_to_workspace(-1) end)
hl.bind(vars.kbMove .. " + down", function() return smw.move_to_workspace(+1) end)
hl.bind(vars.kbMove .. " + W", function() return smw.move_to_workspace(-1) end)
hl.bind(vars.kbMove .. " + S", function() return smw.move_to_workspace(+1) end)

-- Window actions
hl.bind(vars.kbFocusWin .. " + up", hl.dsp.focus({ direction = "up" }))
hl.bind(vars.kbFocusWin .. " + down", hl.dsp.focus({ direction = "down" }))
hl.bind(vars.kbFocusWin .. " + left", hl.dsp.focus({ direction = "left" }))
hl.bind(vars.kbFocusWin .. " + right", hl.dsp.focus({ direction = "right" }))
hl.bind(vars.kbFocusWin .. " + W", hl.dsp.focus({ direction = "up" }))
hl.bind(vars.kbFocusWin .. " + S", hl.dsp.focus({ direction = "down" }))
hl.bind(vars.kbFocusWin .. " + A", hl.dsp.focus({ direction = "left" }))
hl.bind(vars.kbFocusWin .. " + D", hl.dsp.focus({ direction = "right" }))

hl.bind(vars.kbMoveWin .. " + up", hl.dsp.window.move({ direction = "up" }))
hl.bind(vars.kbMoveWin .. " + down", hl.dsp.window.move({ direction = "down" }))
hl.bind(vars.kbMoveWin .. " + W", hl.dsp.window.move({ direction = "up" }))
hl.bind(vars.kbMoveWin .. " + S", hl.dsp.window.move({ direction = "down" }))

-- Scrolling layouts
hl.bind(vars.kbFocus .. " + right", hl.dsp.layout("focus r"))
hl.bind(vars.kbFocus .. " + left", hl.dsp.layout("focus l"))
hl.bind(vars.kbFocus .. " + D", hl.dsp.layout("focus r"))
hl.bind(vars.kbFocus .. " + A", hl.dsp.layout("focus l"))

hl.bind(vars.kbMove .. " + right", hl.dsp.layout("swapcol r"))
hl.bind(vars.kbMove .. " + left", hl.dsp.layout("swapcol l"))
hl.bind(vars.kbMove .. " + D", hl.dsp.layout("swapcol r"))
hl.bind(vars.kbMove .. " + A", hl.dsp.layout("swapcol l"))

hl.bind(vars.kbMoveWin .. " + left", hl.dsp.layout("consume_or_expel prev"))
hl.bind(vars.kbMoveWin .. " + right", hl.dsp.layout("consume_or_expel next"))
hl.bind(vars.kbMoveWin .. " + A", hl.dsp.layout("consume_or_expel prev"))
hl.bind(vars.kbMoveWin .. " + D", hl.dsp.layout("consume_or_expel next"))

hl.bind("SUPER + Z", hl.dsp.layout("fit visible"))
hl.bind("SUPER + ALT + Z", function()
    local current_state = hl.config.scrolling.focus_fit_method
    
    local new_state = (current_state == 1) and 0 or 1
    
    hl.config({
        scrolling = {
            focus_fit_method = new_state
        }
    })
end)

hl.bind("SUPER + Minus", hl.dsp.window.resize(fn.resize_active_window(-10, 0)), { repeating = true })
hl.bind("SUPER + Equal", hl.dsp.window.resize(fn.resize_active_window(10, 0)), { repeating = true })
hl.bind("SUPER + SHIFT + Minus", hl.dsp.window.resize(fn.resize_active_window(0, -10)), { repeating = true })
hl.bind("SUPER + SHIFT + Equal", hl.dsp.window.resize(fn.resize_active_window(0, 10)), { repeating = true })
hl.bind("SUPER + ALT + left", hl.dsp.window.resize(fn.resize_active_window(-10, 0)), { repeating = true })
hl.bind("SUPER + ALT + right", hl.dsp.window.resize(fn.resize_active_window(10, 0)), { repeating = true })
hl.bind("SUPER + ALT + up", hl.dsp.window.resize(fn.resize_active_window(0, -10)), { repeating = true })
hl.bind("SUPER + ALT + down", hl.dsp.window.resize(fn.resize_active_window(0, 10)), { repeating = true })

hl.bind("SUPER + mouse:272", hl.dsp.window.drag(), { mouse = true })
hl.bind("SUPER + mouse:273", hl.dsp.window.resize(), { mouse = true })
hl.bind("CTRL + SUPER + Backslash", hl.dsp.window.center())
hl.bind("CTRL + SUPER + ALT + Backslash", hl.dsp.window.resize(fn.resize_by_screen(55, 70)))
hl.bind("CTRL + SUPER + ALT + Backslash", hl.dsp.window.center())
hl.bind(vars.kbToggleWindowFloating, function()
    local a = hl.get_active_window()
    if a then
        local pip = fn.move_actions(a) or {}
        table.insert(pip, 1, hl.dsp.window.float())
        table.insert(pip, hl.dsp.window.pin({ window = "address:" .. a.address }))

        for _, x in ipairs(pip) do
            hl.dispatch(x)
        end
    end
end, { long_press = true })
hl.bind(vars.kbPinWindow, hl.dsp.window.pin())
hl.bind(vars.kbWindowFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }))
hl.bind(vars.kbWindowBorderedFullscreen, hl.dsp.window.fullscreen({ mode = "maximized" }))
hl.bind(vars.kbToggleWindowFloating, hl.dsp.window.float())
hl.bind(vars.kbCloseWindow, hl.dsp.window.close())

-- Special workspace toggles
hl.bind(vars.kbScratchpad, hl.dsp.exec_cmd("caelestia toggle specialws"))
hl.bind(vars.kbSystemMonitorWs, hl.dsp.exec_cmd("caelestia toggle sysmon"))
hl.bind("SUPER + F4", hl.dsp.exec_cmd("caelestia toggle sysmon"))
hl.bind(vars.kbSpecialWs, hl.dsp.exec_cmd("caelestia toggle music"), { long_press = true })
hl.bind(vars.kbSpecialWs, hl.dsp.exec_cmd("caelestia toggle communication"))

-- Apps
hl.bind(vars.kbTerminal, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal))
hl.bind(vars.kbBrowser, hl.dsp.exec_cmd("app2unit -- " .. vars.browser))
hl.bind(vars.kbFileExplorer, hl.dsp.exec_cmd("app2unit -- " .. vars.fileExplorer))
hl.bind(vars.kbYazi, hl.dsp.exec_cmd("app2unit -- " .. vars.terminal .. ' fish -C "y"'))
hl.bind(vars.kbAudioSettings, hl.dsp.exec_cmd("app2unit -- " .. vars.audioSettings))

-- Utilities
hl.bind("Print", hl.dsp.exec_cmd("caelestia screenshot"), { locked = true })
hl.bind("SUPER + Print", hl.dsp.global("caelestia:screenshotFreeze"), { locked = true })
hl.bind("SHIFT + ALT + S", hl.dsp.global("caelestia:screenshotFreeze"), { locked = true })
hl.bind("SUPER + SHIFT + ALT + S", hl.dsp.global("caelestia:screenshot"), { locked = true })
hl.bind("SUPER + ALT + R", hl.dsp.exec_cmd("caelestia record -s"))
hl.bind("SHIFT + ALT + R", hl.dsp.exec_cmd("caelestia record"))
hl.bind("SUPER + SHIFT + ALT + R", hl.dsp.exec_cmd("caelestia record -r"))
hl.bind("SHIFT + ALT + C", hl.dsp.exec_cmd("hyprpicker -a"))

-- Volume
hl.bind("XF86AudioMicMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), { locked = true })
hl.bind("XF86AudioMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), { locked = true })
hl.bind(
    "XF86AudioRaiseVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SOURCE@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%+"
    ),
    { locked = true, repeating = true }
)
hl.bind(
    "XF86AudioLowerVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SOURCE@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%-"
    ),
    { locked = true, repeating = true }
)
hl.bind("F13", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"))
hl.bind("SUPER + Page_Up", hl.dsp.exec_cmd("~/.config/hypr/scripts/media.fish +"), { locked = true }) -- TODO: Change to lua
hl.bind("SUPER + Page_Down", hl.dsp.exec_cmd("~/.config/hypr/scripts/media.fish -"), { locked = true }) -- TODO: Change to lua

-- Clipboard and emoji picker
hl.bind("SUPER + V", hl.dsp.global("caelestia:clipboard"))
hl.bind("SUPER + Period", hl.dsp.global("caelestia:emoji"))
hl.bind("SUPER + K", hl.dsp.global("caelestia:keybinds"))
hl.bind("SUPER + ALT + V", hl.dsp.exec_cmd("pkill fuzzel || caelestia clipboard -d"))
hl.bind("SUPER + ALT + Period", hl.dsp.exec_cmd("pkill fuzzel || caelestia emoji -p"))

-- Cortana API
hl.bind("SUPER + F1", hl.dsp.exec_cmd("cortana api -act on devices/lamp | cortana notify"), { locked = true })
hl.bind("SUPER + F2", hl.dsp.exec_cmd("cortana api -act off devices/lamp | cortana notify"), { locked = true })
hl.bind("SUPER + F5", hl.dsp.exec_cmd("cortana api -val 0 settings/automaticmode | cortana notify"), { locked = true })
hl.bind("SUPER + F6", hl.dsp.exec_cmd("cortana api -val 1 settings/automaticmode | cortana notify"), { locked = true })

-- Submaps
hl.bind("SUPER + Home", hl.dsp.exec_cmd("hyprctl dispatch submap passthru"))
-- Note: You may need standard submap wrapping logic if `hl.dsp.submap` is defined in your framework
hl.bind("SUPER + Home", hl.dsp.exec_cmd("hyprctl dispatch submap reset"))

-- Testing
hl.bind(
    "SUPER + ALT + F12",
    hl.dsp.exec_cmd(
        "notify-send -u low -i dialog-information-symbolic 'Test notification' " ..
        [["Here's a really long message to test truncation and wrapping\nYou can middle click or flick this notification to dismiss it!"]] ..
        " -a 'Shell' -A 'Test1=I got it!' -A 'Test2=Another action'"
    )
)

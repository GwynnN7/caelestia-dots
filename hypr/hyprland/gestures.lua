local vars = require("variables")
local fn   = require("hyprland.functions")

hl.config({
    gestures = {
        workspace_swipe_distance                 = 700,
        workspace_swipe_cancel_ratio             = 0.15,
        workspace_swipe_min_speed_to_force       = 5,
        workspace_swipe_direction_lock           = true,
        workspace_swipe_direction_lock_threshold = 10,
        workspace_swipe_create_new               = true,
    },
})

hl.gesture({ fingers = 3, direction = "up", action = fn.focus_workspace("-1") })
hl.gesture({ fingers = 3, direction = "down", action = fn.focus_workspace("+1") })
hl.gesture({ fingers = 3, direction = "left", action = hl.dsp.layout("focus l") })
hl.gesture({ fingers = 3, direction = "right", action = hl.dsp.layout("focus r") })

hl.gesture({ fingers = 4, direction = "up", action = "fullscreen"})
hl.gesture({ fingers = 4, direction = "down", action = "fullscreen" mode = "maximize"})

hl.gesture({ fingers = 2, direction = "pinch", action = "cursorZoom", zoom_level = 1, mode = "live" })

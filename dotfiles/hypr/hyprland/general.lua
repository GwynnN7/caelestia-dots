hl.monitor({
    output = "DP-1",
    mode = "1920x1080@165.00Hz",
    position = "auto",
    scale = "1",
})

hl.monitor({
    output = "HDMI-A-1",
    mode = "preferred",
    position = "auto",
    scale = "1",
})

hl.config({
    general = {
        layout = "scrolling",
        allow_tearing = 0,
        gaps_workspaces = workspaceGaps,
        gaps_in = windowGapsIn,
        gaps_out = windowGapsOut,
        border_size = windowBorderSize,
        col = {
            active_border = activeWindowBorderColour,
            inactive_border = inactiveWindowBorderColour,
        },
    }
})

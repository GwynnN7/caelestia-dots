hl.monitor({
    output   = "DP-1",
    mode     = "1920x1080@165",
    position = "auto",
    scale    = "1",
})

hl.monitor({
    output   = "eDP-1",
    mode     = "1920x1080@60",
    position = "auto",
    scale    = "1",
})

hl.monitor({
    output   = "HDMI-A-1",
    mode     = "1920x1080@60",
    position = "auto",
    scale    = "1",
})

hl.config({
    misc = {
        force_default_wallpaper = 0,
        disable_hyprland_logo   = true,
      	disable_splash_rendering   = true
    },
})

hl.window_rule({
    name  = "sddm",
    match = {
        class = "^(sddm-greeter)$"
    },

    float = true,
    maximize = true,
    pin = true,
    stay_focused = true,
    decorate = false,
    no_anim = true,
    no_shadow = true,
})

hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd("wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%+"), { locked = true, repeating = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd("wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-"), { locked = true, repeating = true })
hl.bind("XF86AudioMute",        hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), { locked = true })

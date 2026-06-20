hl.on("hyprland.start", function()
    -- Keyring and auth
    hl.exec_cmd("gnome-keyring-daemon --start --components=secrets")
    hl.exec_cmd("/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1")
    
    -- Let the shell naturally expand the Hyprland instance signature env var
    hl.exec_cmd("systemctl --user start hyprland-dmemcg-boost@$HYPRLAND_INSTANCE_SIGNATURE")

    -- Clipboard history
    hl.exec_cmd("wl-paste --type text --watch cliphist store")
    hl.exec_cmd("wl-paste --type image --watch cliphist store")

    -- Auto delete trash 30 days old
    hl.exec_cmd("trash-empty 30")

    -- Devices
    hl.exec_cmd("udiskie")
    hl.exec_cmd("kdeconnectd")
    hl.exec_cmd("kdeconnect-indicator")

    -- Cursors (using Lua string concatenation for your variables)
    hl.exec_cmd("hyprctl setcursor " .. cursorTheme .. " " .. cursorSize)
    hl.exec_cmd("gsettings set org.gnome.desktop.interface cursor-theme '" .. cursorTheme .. "'")
    hl.exec_cmd("gsettings set org.gnome.desktop.interface cursor-size " .. cursorSize)

    -- Location provider and night light
    hl.exec_cmd("/usr/lib/geoclue-2.0/demos/agent")
    hl.exec_cmd("sleep 1 && gammastep")

    -- Forward bluetooth media commands to MPRIS
    hl.exec_cmd("mpris-proxy")

    -- Resize and move windows based on matches (e.g. pip)
    hl.exec_cmd("caelestia resizer -d")

    -- Start shell
    hl.exec_cmd("hyprpm reload")
    hl.exec_cmd("caelestia shell -d && caelestia shell lock lock")
end)

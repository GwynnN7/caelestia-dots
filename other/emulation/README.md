- Switch.sh
    micro ~/Games/retrodeck/roms/apps/Switch.sh 
    chmod +x ~/Games/retrodeck/roms/apps/Switch.sh

- es_systems.xml
    micro ~/.var/app/net.retrodeck.retrodeck/config/ES-DE/custom_systems/es_systems.xml

- Generic
    flatpak override --user --talk-name=org.freedesktop.Flatpak net.retrodeck.retrodeck

    chmod +x Eden.AppImage
    ./Eden.AppImage --appimage-extract
    mv ./Eden ~/Games/retrodeck/Eden
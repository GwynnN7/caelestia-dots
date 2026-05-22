#!/usr/bin/env fish

set ACTION $argv[1]
set ACTIVE (hyprctl monitors -j | jq -r '.[] | select(.focused==true) | .specialWorkspace.name')

if test "$ACTION" = "music"
    caelestia toggle music
else if test "$ACTION" = "communication"
    if test "$ACTIVE" = "special:communication"
        caelestia toggle communication
    else if test "$ACTIVE" = "special:music"
        caelestia toggle music
    else
        caelestia toggle communication
    end
end

#!/usr/bin/env fish

set ACTION $argv[1]

if test "$ACTION" = "up"
    hyprctl dispatch split-cycleworkspaces -1
    exit 0
else if test "$ACTION" != "down"
    exit -1
end

# Get active workspace data
set ACTIVE_WS (hyprctl activeworkspace -j)
set MONITOR (echo $ACTIVE_WS | jq -r '.monitor')
set ACTIVE_ID (echo $ACTIVE_WS | jq -r '.id')
set WINDOWS (echo $ACTIVE_WS | jq -r '.windows')

# Find the highest existing workspace ID on the current monitor
set HIGHEST_ID (hyprctl workspaces -j | jq -r ".[] | select(.monitor == \"$MONITOR\") | .id" | sort -n | tail -1)

if test "$ACTIVE_ID" -eq "$HIGHEST_ID"
    if test "$WINDOWS" -gt 0
        hyprctl dispatch split-workspace empty
    end
else
    hyprctl dispatch split-cycleworkspaces +1
end

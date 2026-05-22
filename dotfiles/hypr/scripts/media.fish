#!/usr/bin/env fish

set DIRECTION $argv[1]
set PREFERRED_PLAYERS tidal-hifi spotify celluloid mpv vlc
set TARGET_PLAYER ""
set CACHE_FILE "/tmp/hypr_media_vol_cache.txt"

set RUNNING_PLAYERS (playerctl -l 2>/dev/null)

for p in $PREFERRED_PLAYERS
    if echo "$RUNNING_PLAYERS" | grep -iq "$p"
        set TARGET_PLAYER $p
        break
    end
end

pw-play /usr/share/sounds/freedesktop/stereo/audio-volume-change.oga &

if test -n "$TARGET_PLAYER"
    set -lx LC_NUMERIC C

    set CURRENT_VOL ""

    if test -f $CACHE_FILE
        set FILE_TIME (stat -c %Y $CACHE_FILE 2>/dev/null; or echo 0)
        set NOW (date +%s)
        if test (math "$NOW - $FILE_TIME") -lt 2
            set CURRENT_VOL (cat $CACHE_FILE)
        end
    end
    
    if test -z "$CURRENT_VOL"
        set CURRENT_VOL (playerctl -p "$TARGET_PLAYER" volume 2>/dev/null)
        if test -z "$CURRENT_VOL"
            set CURRENT_VOL 0.5
        end
    end
    
    if test "$DIRECTION" = "+"
        set NEW_VOL (math -s2 "min(1.0, $CURRENT_VOL + 0.05)")
    else
        set NEW_VOL (math -s2 "max(0.0, $CURRENT_VOL - 0.05)")
    end
    
    echo $NEW_VOL > $CACHE_FILE
    playerctl -p "$TARGET_PLAYER" volume $NEW_VOL
    
    set VOL (math -s0 "$NEW_VOL * 100")
    set PLAYER_NAME (playerctl -p "$TARGET_PLAYER" metadata --format "{{playerName}}" 2>/dev/null | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
    
    if test -z "$PLAYER_NAME"
        set PLAYER_NAME "Media"
    end

    caelestia shell toaster info "Media Player" "$PLAYER_NAME Volume $VOL%" music_note
    
else
    if test "$DIRECTION" = "+"
         wpctl set-mute @DEFAULT_AUDIO_SINK@ 0
         wpctl set-volume -l 1 @DEFAULT_AUDIO_SINK@ 5%+
    else
        wpctl set-mute @DEFAULT_AUDIO_SINK@ 0
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-
    end
end

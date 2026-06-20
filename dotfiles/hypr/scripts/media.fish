#!/usr/bin/env fish

set DIRECTION $argv[1]
set PREFERRED_PLAYERS tidal-hifi zen-bin spotify celluloid mpv vlc
set TARGET_ID ""
set TARGET_NAME ""

pw-play /usr/share/sounds/freedesktop/stereo/audio-volume-change.oga &

set SINK_LIST (pactl list sink-inputs | awk '
    /^Sink Input #/ { 
        if (id != "") print id ":" name
        id=$3; sub(/#/, "", id)
        name="Unknown"
    }
    /application\.process\.binary = / {
        val=$0; sub(/.*= "/, "", val); sub(/"$/, "", val)
        name=val
    }
    /application\.name = / && name=="Unknown" {
        val=$0; sub(/.*= "/, "", val); sub(/"$/, "", val)
        name=val
    }
    END { 
        if (id != "") print id ":" name 
    }
')

for p in $PREFERRED_PLAYERS
    for sink in $SINK_LIST
        set SINK_ID (echo $sink | cut -d':' -f1)
        set SINK_APP (echo $sink | cut -d':' -f2-)
        
        if echo "$SINK_APP" | grep -iq "$p"
            set TARGET_ID $SINK_ID
            set TARGET_NAME $SINK_APP
            break
        end
    end

    if test -n "$TARGET_ID"
        break
    end
end

if test -n "$TARGET_ID"
    if test "$DIRECTION" = "+"
        pactl set-sink-input-volume $TARGET_ID +5%
    else
        pactl set-sink-input-volume $TARGET_ID -5%
    end
    
    set VOL (pactl list sink-inputs | awk -v id="$TARGET_ID" '
        $0 ~ "^Sink Input #"id {found=1}
        found && /Volume:/ {print $5; exit}
    ' | tr -d '%')
    
    set PLAYER_NAME (echo "$TARGET_NAME" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
    
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

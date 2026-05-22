#!/usr/bin/env fish

# Get current active window data
set AW (hyprctl activewindow -j)
set ADDRESS (echo $AW | jq -r '.address')
set CURRENT_WIDTH (echo $AW | jq '.size[0]')

# The lowest possible width a maximized window can be
set MAXIMIZED_THRESHOLD 1808

# A static base width to calculate your ratio against
set BASE_WIDTH 1823

# Calculate the 0.0 to 1.0 ratio using awk
set CURRENT_RATIO (awk "BEGIN {printf \"%.2f\", $CURRENT_WIDTH / $BASE_WIDTH}")

# Create a dedicated, clean cache directory
set CACHE_DIR "/tmp/hypr_niri_sizes"
mkdir -p $CACHE_DIR
set CACHE_FILE "$CACHE_DIR/$ADDRESS.txt"

# Check if the window meets or exceeds the lowest maximized width
if test $CURRENT_WIDTH -ge $MAXIMIZED_THRESHOLD
    # 1. Window is Maximized). Shrink it back
    if test -f $CACHE_FILE
        set SAVED_RATIO (cat $CACHE_FILE)
        hyprctl dispatch layoutmsg colresize $SAVED_RATIO
        
        # Instantly delete the file
        rm -f $CACHE_FILE [cite: 3]
    else
        # Fallback to exactly 50% width
        hyprctl dispatch layoutmsg colresize 0.5
    end
else
    # 2. Window is not maximized. Save its ratio and expand it
    echo $CURRENT_RATIO > $CACHE_FILE [cite: 5]
    
    hyprctl dispatch fullscreen 1
end

# 3. Garbage Collection. SSilently delete any orphaned files
find $CACHE_DIR -type f -mmin +720 -delete 2>/dev/null & [cite: 6]

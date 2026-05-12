#!/usr/bin/env fish

set -l _reload false

# Ensure config directory exists
if ! test -d $argv
    mkdir -p $argv
end

# Reload as needed
if _reload
    hyprctl reload
end

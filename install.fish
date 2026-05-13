#!/usr/bin/env fish

argparse -n 'install.fish' -X 0 \
    'h/help' \
    'noconfirm' \
    'shell' \
    -- $argv
or exit

# Print help
if set -q _flag_h
    echo 'usage: ./install.fish [-h] [--noconfirm] [--shell]'
    echo
    echo 'options:'
    echo '  -h, --help                  show this help message and exit'
    echo '  --noconfirm                 do not confirm package installation'
    echo '  --shell                     reinstall caelestia-shell only'

    exit
end


# Helper funcs
function _out -a colour text
    set_color $colour
    # Pass arguments other than text to echo
    echo $argv[3..] -- ":: $text"
    set_color normal
end

function log -a text
    _out cyan $text $argv[2..]
end

function input -a text
    _out blue $text $argv[2..]
end

function sh-read
    sh -c 'read a && echo -n "$a"' || exit 1
end

function confirm-overwrite -a path src
    if test -e "$path"; or test -L "$path"
        # No prompt if noconfirm
        if set -q noconfirm
            input "$path already exists. Overwrite? [Y/n]"
            log 'Removing...'
            rm -rf "$path"
        else
            # Prompt user
            input "$path already exists. Overwrite? [Y/n] " -n
            set -l confirm (sh-read)

            if test "$confirm" = 'n' -o "$confirm" = 'N'
                log 'Skipping...'
                return 1
            else
                log 'Removing...'
                rm -rf "$path"
            end
        end
    end

    if test -n "$src"
        ln -s (realpath "$src") "$path"
    end

    return 0
end


# Variables
set -q _flag_noconfirm && set noconfirm '--noconfirm'
set -l aur_helper paru
set -l shell_only 0
set -q _flag_shell && set shell_only 1
set -q XDG_CONFIG_HOME && set -l config $XDG_CONFIG_HOME || set -l config $HOME/.config
set -q XDG_STATE_HOME && set -l state $XDG_STATE_HOME || set -l state $HOME/.local/state
set -l install_dir (path dirname (path resolve (status filename)))

# Detect if running on laptop or desktop
set -l is_laptop 0
if test -d /sys/class/power_supply/BAT0 -o -d /sys/class/power_supply/BAT1
    set is_laptop 1
end

# Startup prompt
set_color magenta
echo '╭─────────────────────────────────────────────────╮'
echo '│      ______           __          __  _         │'
echo '│     / ____/___ ____  / /__  _____/ /_(_)___ _   │'
echo '│    / /   / __ `/ _ \/ / _ \/ ___/ __/ / __ `/   │'
echo '│   / /___/ /_/ /  __/ /  __(__  ) /_/ / /_/ /    │'
echo '│   \____/\__,_/\___/_/\___/____/\__/_/\__,_/     │'
echo '│                                                 │'
echo '╰─────────────────────────────────────────────────╯'
set_color normal
log 'Welcome to the Caelestia dotfiles installer!'


# Prompt for backup
if test $shell_only -eq 0; and ! set -q _flag_noconfirm
    log 'Before continuing, please ensure you have made a backup of your config directory.'
    log '[1] Two steps ahead of you!  [2] Make one for me please!'
    input '=> ' -n
    set -l choice (sh-read)

    if contains -- "$choice" 1 2
        if test $choice = 2
            log "Backing up $config..."

            if test -e $config.bak -o -L $config.bak
                input 'Backup already exists. Overwrite? [Y/n] ' -n
                set -l overwrite (sh-read)

                if test "$overwrite" = 'n' -o "$overwrite" = 'N'
                    log 'Skipping...'
                else
                    rm -rf $config.bak
                    cp -r $config $config.bak
                end
            else
                cp -r $config $config.bak
            end
        end
    else
        log 'No choice selected. Exiting...'
        exit 1
    end
end


# Install AUR helper if not already installed
if ! pacman -Q $aur_helper &> /dev/null
    log "$aur_helper not installed. Installing..."

    # Install
    sudo pacman -S --needed git base-devel $noconfirm
    cd /tmp
    git clone https://aur.archlinux.org/$aur_helper.git
    cd $aur_helper
    makepkg -si
    cd ..
    rm -rf $aur_helper

    # Setup
    $aur_helper --gendb
end

# Cd into dir
cd $install_dir || exit 1

set -q CAELESTIA_ROOT_DIR || set -x CAELESTIA_ROOT_DIR $HOME/Projects/caelestia
set -q CAELESTIA_SHELL_REPO || set -x CAELESTIA_SHELL_REPO $CAELESTIA_ROOT_DIR/caelestia-shell
set -q CAELESTIA_SHELL_REPO_URL || set -x CAELESTIA_SHELL_REPO_URL https://github.com/gwynnn7/caelestia-shell.git

if ! test -d "$CAELESTIA_SHELL_REPO/.git"
    if test -e "$CAELESTIA_SHELL_REPO"
        log "$CAELESTIA_SHELL_REPO exists but is not a git repository."
        exit 1
    end

    log "Seeding shell repo in $CAELESTIA_SHELL_REPO..."
    mkdir -p (path dirname "$CAELESTIA_SHELL_REPO")
    git clone "$CAELESTIA_SHELL_REPO_URL" "$CAELESTIA_SHELL_REPO"
end

log 'Installing custom caelestia-shell...'
cd $CAELESTIA_SHELL_REPO || exit 1
$aur_helper -Ui $noconfirm

# Clean up PKGBUILD artifacts
fish -c 'rm -rf src pkg' 2> /dev/null
fish -c 'rm -f caelestia-shell-*.pkg.tar.*' 2> /dev/null

if test $shell_only -eq 1
    log 'Done!'
    exit
end

cd $install_dir || exit 1

# Install metapackage for deps
log 'Installing metapackage...'
$aur_helper -Ui $noconfirm

# Clean up PKGBUILD artifacts
fish -c 'rm -rf src pkg' 2> /dev/null
fish -c 'rm -f caelestia-meta-*.pkg.tar.*' 2> /dev/null

set PKGS \
    thunar \
    zen-browser-bin \
    vesktop \
    telegram-desktop \
    visual-studio-code-bin \
    valent-git \
    flatpak \
    gimp \
    vlc \
    celluloid \
    loupe \
    evince \
    file-roller \
    7zip \
    xorg-xhost \
    ncdu \
    nvtop

log 'Installing packages...'
paru -S --needed --noconfirm $PKGS

# Link everything inside the dotfiles directory (files and directories)
if test -d dotfiles
    for src in dotfiles/*
        if test -e $src
            set name (basename $src)
            set dest $config/$name

            if confirm-overwrite $dest $src
                log "Installing $name..."
            end
        end
    end
end


# Setup VSCode
set -l folder $config/Code/User

log "Setup vscode..."

# Install configs
if confirm-overwrite $folder/settings.json patches/vscode/settings.json && confirm-overwrite $folder/keybindings.json patches/vscode/keybindings.json && confirm-overwrite $config/code-flags.conf patches/vscode/flags.conf
    log "Installing vscode config..."

    # Install extension
    code --install-extension patches/vscode/caelestia-vscode-integration/caelestia-vscode-integration-*.vsix
end


# Setup Zen
log "Setup zen..."

for chrome in $HOME/.zen/*/chrome
    if test -d "$chrome"
        if confirm-overwrite "$chrome/userChrome.css" patches/zen/userChrome.css
            log 'Installing zen userChrome...'
        end
    end
end

# Install native app
set -l hosts $HOME/.mozilla/native-messaging-hosts
set -l lib $HOME/.local/lib/caelestia

if confirm-overwrite $hosts/caelestiafox.json
    log 'Installing zen native app manifest...'
    mkdir -p $hosts
    cp patches/zen/native_app/manifest.json $hosts/caelestiafox.json
    sed -i "s|{{ \$lib }}|$lib|g" $hosts/caelestiafox.json
end

if confirm-overwrite $lib/caelestiafox patches/zen/native_app/app.fish
    log 'Installing zen native app...'
    mkdir -p $lib
end

# Prompt user to install extension
log 'Please install the CaelestiaFox extension from https://addons.mozilla.org/en-US/firefox/addon/caelestiafox if you have not already done so.'

# Custom scripts

mkdir -p "$HOME/.local/bin"
mkdir -p "$HOME/Projects"
mkdir -p "$HOME/Pictures"

if ! test -d "$HOME/Pictures/Wallpaper"
    log 'Cloning Wallpapers...'
    git clone https://github.com/GwynnN7/Wallpaper "$HOME/Pictures/Wallpaper" --depth=1
else
    log 'Wallpapers already exists, skipping...'
end

if ! test -d "$HOME/Projects/Cortana"
    log 'Cloning Cortana...'
    git clone https://github.com/GwynnN7/Cortana "$HOME/Projects/Cortana" --depth=1
else
    log 'Cortana already exists, skipping...'
end

mkdir -p "$HOME/Projects/Cortana/CortanaDesktop/out"

if test -d services
    if test $is_laptop -eq 1
        log 'Skipping service installation on laptop'
    else
        set user_systemd_dir $HOME/.config/systemd/user
        mkdir -p $user_systemd_dir

        set -l enabled_list
        for svc in services/*.service
            if test -f $svc
                set name (basename $svc)
                set dest $user_systemd_dir/$name

                if confirm-overwrite $dest $svc
                    log "Installing service $name..."
                    set enabled_list $enabled_list $name
                end
            end
        end

        if test (count $enabled_list) -gt 0
            if type -q systemctl
                systemctl --user daemon-reload
                for name in $enabled_list
                    systemctl --user enable --now $name
                end
            else
                log 'systemctl not found; cannot enable services automatically.'
            end
        end
    end
end

# Install scripts into ~/.local/bin
if test -d scripts
    log "Setup scripts..."
    set -l bin_dir $HOME/.local/bin
    mkdir -p $bin_dir

    for file in scripts/*
        if test -f $file
            set name (basename $file)
            set dest $bin_dir/$name

            if confirm-overwrite $dest $file
                log "Installing script $name..."
            end
        end
    end
end


log 'Enabling sddm display manager...'
sudo systemctl enable --now sddm.service || log 'Failed to enable sddm service'


# Generate scheme stuff if needed
if ! test -f $state/caelestia/scheme.json
    caelestia scheme set -n shadotheme
    sleep .5
    hyprctl reload
end

set -l _hypr_install 1
if ! set -q noconfirm
    input 'Install Hyprland plugins? [Y/n] ' -n
    set -l _hypr_choice (sh-read)

    if test "$_hypr_choice" = 'n' -o "$_hypr_choice" = 'N'
        set _hypr_install 0
    end
end

if test $_hypr_install -eq 1
    log 'Installing Hyprland plugins'

    hyprpm purge-cache
    hyprpm update
    hyprpm add https://github.com/zjeffer/split-monitor-workspaces
    hyprpm add https://github.com/gfhdhytghd/hymission
    hyprpm enable hymission
    hyprpm enable split-monitor-workspaces
    hyprpm reload
else
    log 'Skipping Hyprland plugins...'
end

# Start the shell
caelestia shell -d > /dev/null
caelestia wallpaper -r "$HOME/Pictures/Wallpaper" > /dev/null

log 'Done!'
bat info/post.md >> $HOME/TODO.md

clear
exec fish -i -C $HOME/TODO.md


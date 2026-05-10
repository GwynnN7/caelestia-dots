#!/usr/bin/env fish

argparse -n 'install.fish' -X 0 \
    'h/help' \
    'noconfirm' \
    -- $argv
or exit

# Print help
if set -q _flag_h
    echo 'usage: ./install.sh [-h] [--noconfirm] [--spotify] [--vscode] [--discord] [--aur-helper]'
    echo
    echo 'options:'
    echo '  -h, --help                  show this help message and exit'
    echo '  --noconfirm                 do not confirm package installation'

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

function confirm-overwrite -a path
    if test -e $path -o -L $path
        # No prompt if noconfirm
        if set -q noconfirm
            input "$path already exists. Overwrite? [Y/n]"
            log 'Removing...'
            rm -rf $path
        else
            # Prompt user
            input "$path already exists. Overwrite? [Y/n] " -n
            set -l confirm (sh-read)

            if test "$confirm" = 'n' -o "$confirm" = 'N'
                log 'Skipping...'
                return 1
            else
                log 'Removing...'
                rm -rf $path
            end
        end
    end

    return 0
end


# Variables
set -q _flag_noconfirm && set noconfirm '--noconfirm'
set -q _flag_aur_helper && set -l aur_helper paru
set -q XDG_CONFIG_HOME && set -l config $XDG_CONFIG_HOME || set -l config $HOME/.config
set -q XDG_STATE_HOME && set -l state $XDG_STATE_HOME || set -l state $HOME/.local/state
set -l install_dir (path dirname (path resolve (status filename)))

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
log 'Before continuing, please ensure you have made a backup of your config directory.'

# Prompt for backup
if ! set -q _flag_noconfirm
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
    if test $aur_helper = yay
        $aur_helper -Y --gendb
        $aur_helper -Y --devel --save
    else
        $aur_helper --gendb
    end
end

# Cd into dir
cd $install_dir || exit 1

log 'Installing custom caelestia-shell...'
cd ./shell || exit 1
$aur_helper -Ui $noconfirm
cd $install_dir || exit 1

# Install metapackage for deps
log 'Installing metapackage...'
$aur_helper -Ui $noconfirm

# Clean up the built package archive
fish -c 'rm -f caelestia-meta-*.pkg.tar.zst' 2> /dev/null


PKGS=(
    zen-browser-bin
    vesktop
    telegram-desktop
    spotify-launcher
    spicetify-cli 
    spicetify-marketplace-bin
    valent-git
    vlc
    celluloid
    gthumb
)
log 'Installing packages...'
set -l has_spicetify (pacman -Q spicetify-cli 2> /dev/null)
paru -S --needed --noconfirm "${PKGS[@]}"


# Install hypr* configs
if confirm-overwrite $config/hypr
    log 'Installing hypr* configs...'
    ln -s (realpath hypr) $config/hypr
    hyprctl reload
end

# Starship
if confirm-overwrite $config/starship.toml
    log 'Installing starship config...'
    ln -s (realpath starship.toml) $config/starship.toml
end

# Foot
if confirm-overwrite $config/foot
    log 'Installing foot config...'
    ln -s (realpath foot) $config/foot
end

# Fish
if confirm-overwrite $config/fish
    log 'Installing fish config...'
    ln -s (realpath fish) $config/fish
end

# Fastfetch
if confirm-overwrite $config/fastfetch
    log 'Installing fastfetch config...'
    ln -s (realpath fastfetch) $config/fastfetch
end

# Btop
if confirm-overwrite $config/btop
    log 'Installing btop config...'
    ln -s (realpath btop) $config/btop
end

# Environment
if confirm-overwrite $config/environment.d
    log 'Installing environment config...'
    ln -s (realpath environment.d) $config/environment.d
end

# MangoHud
if confirm-overwrite $config/MangoHud
    log 'Installing MangoHud config...'
    ln -s (realpath MangoHud) $config/MangoHud
end

# Yazi
if confirm-overwrite $config/yazi
    log 'Installing Yazi config...'
    ln -s (realpath yazi) $config/yazi
end

# Install spicetify

log 'Installing spicetify..'

if test -z "$has_spicetify"
    spicetify backup apply
end

# Install configs
if confirm-overwrite $config/spicetify
    log 'Installing spicetify config...'
    ln -s (realpath spicetify) $config/spicetify

    # Set spicetify configs
    spicetify config current_theme caelestia color_scheme caelestia custom_apps marketplace 2> /dev/null
    spicetify backup apply
end


# Setup VSCode
set -l folder $config/Code/User

log "Setup vscode..."

# Install configs
if confirm-overwrite $folder/settings.json && confirm-overwrite $folder/keybindings.json && confirm-overwrite $config/$prog-flags.conf
    log "Installing vs$prog config..."
    ln -s (realpath vscode/settings.json) $folder/settings.json
    ln -s (realpath vscode/keybindings.json) $folder/keybindings.json
    ln -s (realpath vscode/flags.conf) $config/$prog-flags.conf

    # Install extension
    $prog --install-extension vscode/caelestia-vscode-integration/caelestia-vscode-integration-*.vsix
end


# Setup Zen

log "Setup zen..."

set -l chrome $HOME/.zen/*/chrome
if confirm-overwrite $chrome/userChrome.css
    log 'Installing zen userChrome...'
    ln -s (realpath zen/userChrome.css) $chrome/userChrome.css
end

# Install native app
set -l hosts $HOME/.mozilla/native-messaging-hosts
set -l lib $HOME/.local/lib/caelestia

if confirm-overwrite $hosts/caelestiafox.json
    log 'Installing zen native app manifest...'
    mkdir -p $hosts
    cp zen/native_app/manifest.json $hosts/caelestiafox.json
    sed -i "s|{{ \$lib }}|$lib|g" $hosts/caelestiafox.json
end

if confirm-overwrite $lib/caelestiafox
    log 'Installing zen native app...'
    mkdir -p $lib
    ln -s (realpath zen/native_app/app.fish) $lib/caelestiafox
end

# Prompt user to install extension
log 'Please install the CaelestiaFox extension from https://addons.mozilla.org/en-US/firefox/addon/caelestiafox if you have not already done so.'

# Generate scheme stuff if needed
if ! test -f $state/caelestia/scheme.json
    caelestia scheme set -n shadotheme
    sleep .5
    hyprctl reload
end

# Start the shell
caelestia shell -d > /dev/null

log 'Done!'

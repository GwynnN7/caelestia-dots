#!/bin/sh

set -eu

repo_url=${CAELESTIA_REPO_URL:-https://github.com/GwynnN7/caelestia-dots.git}
repo_ref=${CAELESTIA_REPO_REF:-main}
root_dir=${CAELESTIA_ROOT_DIR:-$HOME/Projects/caelestia}
repo_dir=${CAELESTIA_REPO_DIR:-$root_dir/caelestia-dotfiles}

printf '%s\n' 'Upgrading system and required packages...' >&2

sudo pacman -Syu --needed --noconfirm fish git
mkdir -p "$(dirname "$repo_dir")"

git clone --depth 1 --branch "$repo_ref" "$repo_url" "$repo_dir" >/dev/null
exec fish "$repo_dir/install.fish" < /dev/tty
#!/bin/sh

set -eu

repo_url=${CAELESTIA_REPO_URL:-https://github.com/GwynnN7/caelestia-dots.git}
repo_ref=${CAELESTIA_REPO_REF:-main}
root_dir=${CAELESTIA_ROOT_DIR:-$HOME/Projects/caelestia}
repo_dir=${CAELESTIA_REPO_DIR:-$root_dir/caelestia-dotfiles}

sudo pacman -Syu --needed --noconfirm fish git
mkdir -p "$(dirname "$repo_dir")"

if [ ! -f "$repo_dir/install.fish" ] || [ ! -d "$repo_dir/dotfiles" ]; then
    if ! command -v git >/dev/null 2>&1; then
        printf '%s\n' 'git is required to bootstrap Caelestia from a shell pipe.' >&2
        exit 1
    fi

    git clone --depth 1 --branch "$repo_ref" "$repo_url" "$repo_dir" >/dev/null
fi

exec fish "$repo_dir/install.fish"
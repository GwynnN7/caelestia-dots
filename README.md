<h1 align=center>caelestia-shell</h1>

<div align=center>

![GitHub last commit](https://img.shields.io/github/last-commit/gwynnn7/caelestia-dots?style=for-the-badge&labelColor=101418&color=9ccbfb)
![GitHub Repo stars](https://img.shields.io/github/stars/caelestia-dots/caelestia?style=for-the-badge&labelColor=101418&color=b9c8da)
![GitHub repo size](https://img.shields.io/github/repo-size/gwynnn7/caelestia-dots?style=for-the-badge&labelColor=101418&color=d3bfe6)

</div>

https://github.com/user-attachments/assets/0840f496-575c-4ca6-83a8-87bb01a85c5f

## Installation

> [!NOTE]
> This is a customized fork of the original [`caelestia-dots`](https://github.com/caelestia-dots/caelestia) repository.
> It is **not** recommended to use this version. Refer to the [`original dotfiles`](https://github.com/caelestia-dots/caelestia) installation.

The default structure is:

> [!WARNING]
> The install script symlinks all configs into place, so you CANNOT
> move/remove the repo folder once you run the install script. If
> you do, most apps will not behave properly and some (e.g. Hyprland)
> will fail to start completely. I recommend cloning the repo to
> `~/Projects/caelestia/caelestia-dotfiles`.

The install script has some options for installing configs for some apps.

```
$ ./install.fish -h
usage: ./install.fish [-h] [--noconfirm] [--shell]

options:
  -h, --help                  show this help message and exit
  --noconfirm                 do not confirm package installation
  --shell                reinstall caelestia-shell only
```

For example:

```sh
curl -fsSL https://raw.githubusercontent.com/gwynnn7/caelestia-dots/main/install.sh | sh
```

To upgrade an existing checkout, run:

```sh
cd ~/Projects/caelestia
cd caelestia-dotfiles
./install.fish

# shell-only reinstall
./install.fish --shell
```

Dependencies:

- caelestia-cli
- caelestia-shell
- caelestia-sddm-minimalistv2-git
- hyprland
- xdg-desktop-portal-hyprland
- xdg-desktop-portal-gtk
- hyprpicker
- polkit-gnome
- gnome-keyring
- uwsm
- wl-clipboard
- cliphist
- wtype
- inotify-tools
- app2unit
- wireplumber
- trash-cli
- dotnet-sdk
- udiskie
- geoclue
- gammastep
- micro
- pacseek
- foot
- fish
- yazi
- eza
- bat
- fastfetch
- starship
- btop
- jq
- 7zip
- adw-gtk-theme
- playerctl
- papirus-icon-theme
- qtengine-git
- ttf-jetbrains-mono-nerd

Optional dependencies:

- thunar (file manager)
- telegram-desktop (message client)
- vesktop (communication client)
- visual-studio-code-bin (code editor)
- zen-browser (web browser)
- valent-git (phone link)
- cachyos-gaming-applications (gaming suite)
- gamemode (gaming utility)

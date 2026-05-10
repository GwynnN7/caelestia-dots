# caelestia-meta

_pkgname='caelestia-meta'
pkgname="$_pkgname-gwynn7" 
pkgver=1.0
pkgrel=1
pkgdesc='A metapackage containing all dependencies for the Caelestia dotfiles'
arch=('any')
url='https://github.com/caelestia-dots/caelestia'
license=('GPL-3.0-only')
provides=($_pkgname)
conflicts=($_pkgname)
pkgver() {
    cd "${srcdir}/${pkgname}"
    git describe --long --tags --abbrev=7 | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
depends=('caelestia-cli' 'caelestia-shell'
         'hyprland' 'xdg-desktop-portal-hyprland' 'xdg-desktop-portal-gtk' 'hyprpicker'
         'wl-clipboard' 'cliphist' 'inotify-tools' 'app2unit' 'wireplumber' 'trash-cli'
         'foot' 'fish' 'yazi' 'eza' 'fastfetch' 'starship' 'btop' 'jq' 'adw-gtk-theme'
         'papirus-icon-theme' 'qtengine-git' 'ttf-jetbrains-mono-nerd')
optdepends=('thunar: file manager'
            'spotify-launcher: music player'
            'visual-studio-code: code editor'
            'zen-browser: web browser'
            'gnome-keyring: keyring daemon'
            'polkit-gnome: gnome polkit client')

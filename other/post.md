Post-Installation:

- Install the CaelestiaFox extension
  https://addons.mozilla.org/en-US/firefox/addon/caelestiafox

- Edit sudoers with visudo command:
  gwynn7 ALL=(ALL) NOPASSWD: /usr/bin/efibootmgr
  gwynn7 ALL=(ALL) NOPASSWD: /usr/bin/scxctl
  gwynn7 ALL=(root) NOPASSWD: /usr/share/sddm/themes/caelestia/scripts/sync.sh

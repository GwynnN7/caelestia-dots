Post-Installation:

- Install the CaelestiaFox extension
  https://addons.mozilla.org/en-US/firefox/addon/caelestiafox

- Edit sudoers with visudo command:
  gwynn7 ALL=(ALL) NOPASSWD: /usr/bin/efibootmgr
  gwynn7 ALL=(ALL) NOPASSWD: /usr/bin/scxctl
  gwynn7 ALL=(root) NOPASSWD: /usr/share/sddm/themes/caelestia/scripts/sync.sh

- Follow CachyOS instruction for AutoMounting and Scheduling
  https://wiki.cachyos.org/configuration/sched-ext/
  https://wiki.cachyos.org/configuration/automount_with_fstab/

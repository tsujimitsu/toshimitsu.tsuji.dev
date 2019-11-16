# Raspberry Pi 3 Model B(+)

## 開封時

- https://kureuetan.com/web/raspberrypi/4236/

## 初期設定

- sudo raspi-config

  - キーボードレイアウト
  - タイムゾーン
  - Wifi
    - [2 Network Options] -> [N2 Wi-Fi]
    - SSID と Key を入力する
    - hostname -I
  - SSH
    - [5 Interfacing Options] -> [P2 SSH]
  - アップデート
    - sudo apt-get update
    - sudo apt-get upgrade

## 初期設定

- http://ykubot.com/2017/01/17/raspberry-pi-3-initialize/
- https://qiita.com/diskn/items/cb06b7d81ec068febc5e

- 初期パスワード
  - pi / raspberry
- Turn Off Bluetooth
  - Desktop の右上から無効化する（不要な場合は）
- keyboard Layout 変更(Japan > Japanese)
  - [4 Localisation Options] -> [I3 Change Keyboard Layout]
  - Keyboard Model : Generic 105-Key (Intl) PC
  - Keyboard layout : Other -> Japanese
  - Key to function as AltGr : The default for keyboard layout
  - Compose key : No compose key
- Wifi 接続設定
- 静的 IP 設定
  - Desktop の右上の Wifi アイコンを右クリック、Wireless & Wired Network Settings
  - SSID と自身が接続する Wifi アクセスポイントを選択
  - Automatically configure empty options の選択を外し、IPv4 Address & Router & DNS Servers を入れる
  - https://raspida.com/wifi4raspbian
- Wifi パスワードの暗号化
  - wpa_passphrase "<SSID>" "<Password>"
  - sudo vi /etc/wpa_supplicant/wpa_supplicant.conf
    - psk の値を置き換える
- 初期パスワード変更
  - sudo su -
  - raspi-config
  - Change User Password
- タイムゾーン変更
  - sudo su -
  - raspi-config
  - Localisation Options
  - Change Timezone
  - Asia > Tokyo
- 起動オプションの変更
  - Boot Options
  - Desktop / CLI
  - B1 Console
- Reboot
- SSH 設定
  - sudo touch /boot/ssh
  - reboot
  - (別端末から)ssh -l pi 192.168.0.252
    - パスワードは raspberry

## Camera

- [Raspberry Pi カメラのセットアップ方法](https://www.rs-online.com/designspark/raspberry-pi-camera)

## OS

- [Raspberry Pi 3 を Mac でインストールして起動するまで](http://ykubot.com/2017/01/14/raspberry-pi-3-install/)
- [ラズベリーパイが壊れた？！そんな時は SD カードの接続を疑おう](http://lab-b.jp/2014/10/02/raspberry-pi-repair/)

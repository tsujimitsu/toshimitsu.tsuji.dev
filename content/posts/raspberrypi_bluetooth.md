# raspberry pi bluetooth

```
$ sudo adduser pi bluetooth
$ newgrp bluetooth

$ sudo adduser t-tsuji bluetooth
$ newgrp bluetooth

$ sudo shutdown -r now
```

```
$ rfkill list
$ sudo rfkill unblock bluetooth
$ sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)
```

```
$ sudo systemctl status hciuart

$ sudo hciconfig hci0
$ sudo hciconfig hci0 up
$ sudo hciconfig hci0 reset
```

```
$ sudo hcitool lescan
$ bluetoothctl
$ scan on
```

```
$ node-red
#$ sudo node-red
```

```
$ sudo hcitool lescan
$ sudo gatttool -b C9:12:2F:D7:A1:D8 --interactive -t random
$ connect
$ char-write-cmd 0x0016 570100
$ char-write-cmd 0x0016 570101
$ char-write-cmd 0x0016 570102

$ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570100
$ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570101
$ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570102
```

## Reference

* [Raspberry Piでbluezを使ってBLESerialとつなぐ](https://qiita.com/yujimny/items/7e92f240f48550585500)
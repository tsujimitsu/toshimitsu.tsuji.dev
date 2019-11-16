---
title: Linux Login Check
slug: linux-login-check
tags:
- "linux"
date: 2015-10-09T00:00:00+09:00
draft: false
---

```
    # last
    # last | grep "still logged in"
    # date; last | grep "still logged in"
    # last | grep -E "119.72.198.200|119.72.195.161"
    # last | grep -Ev "119.72.198.200|119.72.195.161"
    # cat /var/log/secure | grep "Failed password"
    # lastb | awk '{print $1}' | sort | uniq -c | sort -nr | head -10
    # cat /var/log/secure | grep sshd:session

    # cat /etc/logrotate.conf
    /var/log/wtmp {
    monthly
    create 0664 root utmp
        minsize 1M
    rotate 1
    }

    # df -h
    # w
    # iostat
    # top -b
    # vmstat
    # top n 1 b
    # top n 1 b | grep -E "^top|^Tasks:|^Cpu(s):|^Mem:|^Swap:"

    Linuxのメモリ空：free（１行目） + buffers + cached
```

* [Linuxサーバーの不正アクセス監視コマンド](http://ameblo.jp/yuu-sys-guard/entry-11777589767.html)
* [Linuxサーバーへ不正ログインを試みたユーザー一覧を出すワンライナー](http://qiita.com/it_boy/items/cb939d27529bb415753c)
* [Linuxサーバの負荷や使用率を調査するコマンドと手順](http://easyramble.com/linux-command-to-check-status.html)
* [topコマンドの使い方](http://qiita.com/k0kubun/items/7368c323d90f24a00c2f)
* [【RHEL】linuxのメモリ使用率(利用率)の計算方法](http://nopipi.hatenablog.com/entry/2015/09/13/181026)
* [Linux のメモリー管理](http://www.math.kobe-u.ac.jp/~kodama/tips-free-memory.html)
* [freeコマンドの見方](http://open-groove.net/linux-command/free/)

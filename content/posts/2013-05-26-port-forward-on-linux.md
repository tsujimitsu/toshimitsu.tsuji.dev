---
title: Port-forward on Linux
slug: port-forward-on-linux
tags:
- "linux"
- "network"
date: 2013-05-26T00:00:00+09:00
draft: false
---

Linuxをルータ化して二つのセグメントを受け渡しする方法。

* http://okwave.jp/qa/q7892385.html

上記サイトに載っている内容プラスiptablesを無効化しないとだめ。
なお、各セグメントに接続されている端末にはGATEWAYかスタティックルートをLinuxルータに向けておく必要あり。

* http://lists.debian.or.jp/debian-users/200709/msg00166.html

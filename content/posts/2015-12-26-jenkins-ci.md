---
title: Jenkins CI
slug: jenkins-ci
tags:
- "jenkins"
- "ci"
date: 2015-12-26T00:00:00+09:00
draft: false
---

pytestでのCI環境
-------------------
* pythonのアプリケーションをjenkinsでCIする。


CentOS7へのjenkinsインストール
--------------------------------
* jenkisのページでyumリポジトリとして公開されているためオンラインインストールが可能となっている。


ビルド失敗時のメール通知
--------------------------
* 何かスクリプトを噛ます必要があるものと考えていたがjenkins自体に通知設定がある。
* gmail側でsmtpメール送信を許可する追加設定が必要となる。


reference
-----------
* [pytestとjenkinsでCI環境を構築](http://qiita.com/ques0942/items/9e0a9db84fd071ead61c)
* [python2と3のテスト](http://papaeye.tumblr.com/post/19886356798/jenkins-%E3%81%A7-python-%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E8%A7%A3%E6%9E%90%E3%81%A8%E3%83%86%E3%82%B9%E3%83%88)
* [pythonとjenkinsの連携](http://d.hatena.ne.jp/kuma8/20121124/1353723982)
* [pythonをnoseでテスト](http://momijiame.tumblr.com/post/70768835863/python-%E3%81%AE-nose-coverage-%E3%81%A7%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E3%82%AB%E3%83%90%E3%83%AC%E3%83%83%E3%82%B8%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B)
* [pytestのオススメプラグイン](http://wonderpla.net/blog/engineer/Python_py.test_Plug-in/)
* [pythonとdjango関連のテスト事情](http://akiyoko.hatenablog.jp/entry/2015/01/01/212712)
* [CentOS7へのjenkinsインストール](http://qiita.com/yukimunet/items/28c89370fccc86077dd2)
* [jenkinsでビルドが失敗した時にgmailにメール通知する](http://kakakikikeke.blogspot.jp/2014/04/jenkinsgmail.html)

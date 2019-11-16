---
title: Dsget Commnad on ADLDS
slug: dsget-command-on-adlds
tags:
- "adlds"
date: 2013-05-27T00:00:00+09:00
draft: false
---

AD LDSの役割を追加するだけでは、dsget, dsaddなどのコマンドが使えない。なので、Active Directory ドメインサービスの役割を追加して、サービスは起動せずにコマンドだけ使う。（powershellからアクセスできるが異様に遅い）

* http://adtan.wordpress.com/2012/02/12/%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3-%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%AE%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%81%B8%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC/
* http://adtan.wordpress.com/2012/01/02/%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3-%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4/

```
# dsget group “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -members -s lds01:389
# dsmod group “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -addmbr “CN=test01,OU=Groups,DC=codelogue,DC=com” -s lds01:389
# dsrm “CN=test01,OU=Users,DC=codelogue,DC=com” -s lds01:389 -noprompt
```
dsrmは削除するか確認が返ってくるのでnopromptで自動返答する

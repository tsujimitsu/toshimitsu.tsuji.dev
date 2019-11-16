---
title: CLI ADLDS
slug: cli-adlds
tags:
- "adlds"
date: 2013-05-26T00:00:00+09:00
draft: false
---

ユーザグループ追加などの作業で必要となる。

* [Windows 2008 R2: Managing AD LDS using the AD PowerShell Module](https://blogs.technet.microsoft.com/askds/2009/09/14/windows-2008-r2-managing-ad-lds-using-the-ad-powershell-module/)

以下はコマンド例。

```
New-ADUser -name “test01” -Displayname “test01” -server lds01:389 -Path “OU=Users,DC=codelogue,DC=com”

Add-ADGroupMember -identity “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -member “CN=test01,OU=Users,DC=codelogue,DC=com” -partition “DC=codelogue,DC=com” -server lds01
```

powershellをコマンドプロンプトから呼び出してバッチ処理する

* http://news.mynavi.jp/column/powershell/013/index.html
* http://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx
* http://d.hatena.ne.jp/mokkyu/20080421/1208728868

1. ファイルを準備する

```
C:¥Users¥Administrator¥Desktop¥Test.ps1

  Import-Module ActiveDirectory

  New-ADUser -name “test01” -Displayname “test01” -server lds01:389 -Path “OU=Users,DC=codelogue,DC=com”

  Add-ADGroupMember -identity “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -member “CN=test01,OU=Users,DC=codelogue,DC=com” -partition “DC=codelogue,DC=com” -server lds01
```

2. コマンドプロンプトを開く

```
C:¥Users¥Administrator¥Desktop>

  # powershell Set-ExecutionPolicy RemoteSigned

  # powershell ./Test.ps1
```

* コマンドで検索とかする
  * http://www.upken.jp/kb/bEIQypTouWhBnzwQQlhXilmkYtAOyb.html

* コマンドラインからユーザ追加（ldfideコマンド）
  * http://technet.microsoft.com/ja-jp/library/cc725619(v=ws.10).aspx

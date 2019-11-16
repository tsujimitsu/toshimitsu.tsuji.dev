---
title: Electron Primer
slug: electron-primer
tags:
- "electron"
date: 2015-08-25T00:00:00+09:00
draft: false
---

# node のインストール
* [windows installer(.msi)](https://nodejs.org/download/) をインストール。
```
    node -v
    > v0.12.7
```

# Electron のインストール
```
    npm -g install electron-prebuilt
    >electron-prebuilt@0.31.0 C:\Users\XXXX\AppData\Roaming\npm\node_modules\electron-prebuilt
     ├── extract-zip@1.0.3 (debug@0.7.4, minimist@0.1.0, async@0.9.0, yauzl@2.3.1,
     mkdirp@0.5.0, through2@0.6.3, concat-stream@1.5.0)
     └── electron-download@1.0.8 (path-exists@1.0.0, home-path@0.1.2, debug@2.2.0,
     mkdirp@0.5.1, mv@2.1.1, nugget@1.5.4)

    npm ls -g electron-prebuilt
    >└── electron-prebuilt@0.31.0
```

# Application 作成
```
    pwd .../node/electron-sample
    npm init
    > 全てEnter（デフォルト）で作成
    
    dir
    > package.json
    >> package.json の main を index.jsからmain.jsへ変更している。

    vim main.js
    vim index.html

    dir
    > package.json
      main.js
      index.html

    electron ./
```

# Archive する
```
    npm -g install asar
    cd ..
    pwd
    > .../node

    asar pack ./electron-sample ./electron-sample.asar
    electron ./electron-sample.asar
``` 

# 配布用ファイルを作成する
```
    npm -g install electron-packager
    electron-packager ./electron-sample electron-sample --platform=darwin,win32 --arch=x64 --version=0.31.0
    dir
    > electron-sample-win32-x64
    > darwin も指定していたがWindows上で作成するとdarwinはできないのか？
```

# Reference
* [30分で出来る、JavaScript (Electron) でデスクトップアプリを作って配布するまで](http://qiita.com/nyanchu/items/15d514d9b9f87e5c0a29)
* [node.js のrequire先pathにnpm -gでグローバルインストールしたのものを登録する](http://qiita.com/hikaruna/items/abdadca27f12c0e4eb78)

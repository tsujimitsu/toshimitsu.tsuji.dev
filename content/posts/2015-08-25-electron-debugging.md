---
title: Electron Debugging
slug: electron-debugging
tags:
- "electron"
date: 2015-08-25T00:00:00+09:00
draft: false
---

# electron でデバッグを行う方法の１つ
* electron-debug ツールを利用する

# electron-debug の利用
```
    dir
    >index.html
     main.js
     ...

    npm install --save electron-debug
    dir
    >index.html
     main.js
     node_modules
       \electron-debug
     ...

    vim main.js
    >require('electron-debug')();

    vim package.json
    >"dependencies": {
       "electron-debug": "^0.2.0"
     }
    
    electron .
    >WindowsOSの場合は、F12でDev Tools起動、Ctrl+Rで再読み込み。
```

# Reference
* [sindresorhus/electron-debug](https://github.com/sindresorhus/electron-debug)

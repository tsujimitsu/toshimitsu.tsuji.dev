# electron

- Chromium(Chrome ブラウザのエンジン)と Node.js がランタイムになる
- Visual Studio Code(Microsoft)や Atom(GitHub)，Slack，Skype の開発に採用されている
  - その他の採用事例は[awesome-electron](https://github.com/sindresorhus/awesome-electron)に掲載されている

## Install

- [最新版で学ぶ Electron 入門 – HTML5 で PC アプリを開発する利点と手順](https://ics.media/entry/7298)

### Environment

```
$ npm -v
5.8.0
$ node -v
v9.8.0
```

### npm init

```
$ npm init
(all enter)
```

### npm install

```
$ npm i --save-dev electron
$ mkdir src
```

### create entry point

```
$ vi src/package.json
{
  "main": "main.js"
}
```

### create app

```
$ vi src/main.js
// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// メインウィンドウ
let mainWindow;

function createWindow() {
  // メインウィンドウを作成します
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools();

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});
```

### create view

```
$ vi src/index.html
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello World!</title>
</head>

<body>
  <h1>初めてのElectron</h1>
  We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>.
</body>
</html>
```

### app start

```
$ npx electron src
```

## Packaging

### install npm

```
$ npm i --save-dev electron-packager
```

### create app

```
$ npx electron-packager src Electron-Firstapp --platform=darwin --arch=x64 --overwrite
$ npx electron-packager src Electron-Firstapp --platform=win32 --arch=x64 --overwrite
※ MacOS上でWindows向けのビルドを行うためにはWineというプログラムが別途必要
```

### Check

```
$ ls -l
drwxr-xr-x@   6 tsujimitsu  staff    192  4  8 18:07 Electron-Firstapp-darwin-x64
...
```

## develop setting

```
$ vi package.json
scripts": {
    "start": "electron ./src",
    "build-macOS": "electron-packager ./src Electron-Firstapp --platform=darwin --arch=x64 --overwrite",
    ...

$ npm run start
$ npm run build-macOS
```

## reference

- [Electron アプリのウィンドウサイズ＆ポジションを復元する](https://qiita.com/Linda_pp/items/a81e1fd34951ae7d2dc4)

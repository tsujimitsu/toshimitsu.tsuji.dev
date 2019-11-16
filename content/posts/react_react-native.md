# React

* React は React.js(ReactJS) と記載されることもある
* JSX と呼ばれる記法を使う
* React と React Native のコードをある程度共通化する方法
  * https://qiita.com/tuttieee/items/7c66691fe6cc244053de#electron
* React を理解するためには webpack(バンドラ), babel(トランスパイラ) も理解する必要がある

## Create dev environment

* https://vitalify.jp/app-lab/react-js-20170911/
* [create-react-app は簡単に環境を作成できる反面、デフォルトの設定を簡単にカスタマイズできない](https://www.to-r.net/media/react-tutorial12/)
* [create-react-app のボイラーテンプレートになっている registerServiceWorker とは](https://qiita.com/f_uto/items/1c49ab8edbcaf25b4315)

```
$ export PATH=$PATH:./node_modules/.bin
$ npm i --save-dev create-react-app
$ create-react-app testapp
$ cd testapp
$ npm start
## ブラウザが開いて localhost:3000 でReactアプリが起動する

$ npm run build
$ ls -l build
```

## Develop

```
$ npm start
$ vi src/App.js
  -> browser auto reload
```

## Directory structure

* redux の導入を将来的に行うことを想定して、導入前から以下のような形になるようにしておく
  * https://webbibouroku.com/Blog/Article/react-redux-todo

```
$ ls -1 src
App.css
App.js
App.test.js
actions/
components/
containers/
reducers/
index.css
index.js
registerServiceWorker.js
```

## react-router の導入

* [React Router の使い方](http://cloudcafe.tech/?p=2211)

```
$ npm install --save react-router-dom
```

## query-string を処理する

```
$ npm install --save query-string
```

## redux の導入

* https://webbibouroku.com/Blog/Article/react-redux-todo

## React Native Firebase

* https://qiita.com/koki_cheese/items/e9f165563b3dadb0da03
* https://qiita.com/shinnoki/items/599d1aec23f12f00317b
* Firebase のページで firestore を有効化（テストモード）
* Project 作成，react-native-firebase のインストール

```
react-native init firestoreapp
cd firestoreapp/
npm install --save react-native-firebase
```

* package.json で"babel-preset-react-native": "4.0.0"に書き換える(5.0.0 は動かない)
* npm install

* Firebase のページで iOS の追加
  * iOS bundle ID: com.codelogue.firestoreapp
  * App nickname: <none>
  * App Store ID: <none>
* Download GoogleService-info.plist をダウンロード
  * ios/firestoreapp/GoogleService-Info.plist に保存
* Xcode の Project 設定欄, General > Identity > Bundle Identifier に上記の IOS bundle ID を設定する
* link

```
react-native link
```

* cocoapod インストールと設定

```
sudo gem install cocoapods
cd ios
pod init
```

```
vi Podfile

platform :ios, '9.0'

target 'firestoreapp' do
  pod 'Firebase/Core'
  pod 'Firebase/Firestore'
end
```

```
pod install
```

```
vi .gitignore
ios/Pods
```

```
vi ios/{Project Name}/AppDelegate.m

#import <Firebase.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
```

```
vi App.js

export default class App extends Component<Props> {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("messages");
    this.ref.add(["abc"]);
  }
```

* Xcode の File > Add File to <ProjectName> で GoogleService-Info.plist を追加する
* ios/[YOUR APP NAME].xcproj の代わりに ios/[YOUR APP NAME].xcworkspace を使う

# React Native

## 環境設定

* Install Xcode
* Run Xcode and agree license
* Install Homebrew

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew -v
```

* Install Nodebrew

```
$ brew install nodebrew
$ nodebrew -v
$ echo 'export PATH=$PATH:$HOME/.nodebrew/current/bin' >> ~/.bash_profile
```

* Install Node.js

```
$ mkdir -p ~/.nodebrew/src
$ nodebrew ls-remote
$ nodebrew install-binary v9.8.0
$ nodebrew ls
$ nodebrew use v9.8.0
$ nodebrew ls
$ node -v
v9.8.0
$ npm -v
5.6.0
```

* Downgrade npm

```
$ npm install -g npm@4.6.1
$ npm -v
```

* Install watchman

```
$ brew update
$ brew install watchman
```

* Install React Native

```
$ npm install -g create-react-native-app

※native コードを混ぜてアプリ開発する場合は上記の代わりに以下
$ npm install -g react-native-cli
```

* Create Project

```
$ create-react-native-app MyProject
$ cd MyProject
$ npm start
```

* Install "Expo Client" on iPhone
  * iPhone と開発機を同じ Wifi ネットワークに接続する
  * Expo Client で QR コードを読み取る
  * Got it ボタンを押す

## React Native 開発ライブラリ

* redux
* react-native-router-flux
  * react-navigation
* redux-persist
* react-native-config

## 開発環境

### Prettier

* ライブラリインストール

```
$ npm install -g eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import prettier-eslint prettier-eslint-cli eslint-plugin-jest

##$ npm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import prettier-eslint prettier-eslint-cli eslint-plugin-jest
```

* Prettier, eslint の拡張機能を導入
* 表示>コマンドパレット>user settings

```
{
"editor.formatOnSave": true,
"javascript.format.enable": false,
"prettier.eslintIntegration": true
}
```

## Tips

### ナビゲーションメニューの作り方

* [Navigating Between Screens](http://facebook.github.io/react-native/docs/navigation.html)
* [React Navigation を使ってみる【これからはじめる React Native】](https://bagelee.com/programming/react-native/react-navigation-react-native/)
  * 公式マニュアルのナビゲーション説明にも出てくることから react-navigation を使う

### React コンポーネントを別ファイルで定義し，インポートする方法

* [【Q&A】ReactJS の Component を import,export する](https://qiita.com/HIGAX/items/28f3bec814928b7395da)
* [React Native で WordPress リーダーアプリを作ってみた](https://loumo.jp/wp/archive/20170702120041/)

```
# index.js

import HomeScreen from './screen/HomeScreen';

# ./screen/HomeScreen

import React, { Component } from 'react';

export default class HomeScreen extends Component {
render() {
return ();
}
}
```

### Camera をコントロールする

* [react-native-camera を使用する](https://qiita.com/h-sakano/items/00250f55b2370b8c6f4c)

### 実機デプロイ時に node のパスエラーがでる

* [React-Native を iOS 実機でビルドしたら，node binary が見つからないとエラーが出た件](https://qiita.com/mkazutaka/items/eca26d441461985d8397)

### xcode からデプロイがうまくできない

* Project 設定を開く（左上のプロジェクト名を選択）
  * General > Identity の Bundle Identifier を変更する
  * General > Signing でアカウントを追加する
    * アカウントは Manage Certificates で iOS Deployment を作成しておく
  * General > Deployment Info で Deployment Target を設定する（OS バージョン）
* 上記と同じことを XXXTests に対しても行う

## Reference

* [Mac に Node.js をインストール](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)
* [ReactNative はじめの一歩](https://qiita.com/yotsak83/items/ee1fd72a8ba25c6fe27e)
* [ReactNative 入門](http://blog.spacemarket.com/code/reactnative-beginner/)
* [VSCode で Prettier を入れる](https://qiita.com/ozaki25/items/fde66fd971690767394a)
* [prettier の使い方](https://qiita.com/kiida/items/405bb07c4b52bfee0219)

```

```

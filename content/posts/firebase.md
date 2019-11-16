# Firebase(Google)

## realm 利用方法

- https://realm.io/docs/javascript/latest

## realm を link した状態で ios アプリがデプロイできない

- react-native run-ios コマンドで行う
  - https://realm.io/docs/javascript/latest/#missing-realm-constructor

## Command

```
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ vi public/index.html
$ firebase deploy
```

## Create CI Auth Token

```
firebase login:ci
firebase deploy --token "$FIREBASE_TOKEN"
```

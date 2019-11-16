---
path: "/blog/development"
date: "2019-07-17"
title: "development"
tags: ["npm", "lerna", "design-system"]
---

## npm

[npm がうまくインストール動かない時の対処法](https://stackoverflow.com/questions/54611707/request-to-https-registry-npmjs-org-co-failed)
[proxy 環境下での npm config 設定](https://qiita.com/tenten0213/items/7ca15ce8b54acc3b5719)

```
$ npm config set strict-ssl false
$ npm config set registry http://registry.npmjs.org/
```

### basic

```
$ npm i
$ npm ci (not update package-lock)
```

### [shortid](https://www.npmjs.com/package/shortid)

- URL friendly unique short id generator

## lerna

```
$ lerna publish
```

### lerna changelog

- CHANGELOG の自動生成

## design system

コンポーネントガイド。新規 PJ 参入者などにコンポーネントの使い方を示すために使える。

- [docz](https://www.docz.site/)
- storybook
  - [とにかくコンポーネントを表示したい、簡単に使い始めたい場合は docz](https://speakerdeck.com/mukai21/doczwopjniru-retemita)

## 開発方法論

- 脅威分析
  - 脅威の主体が引き起こす脅威とそれへの対策
    - STRIDE（脅威分析モデルの１つ）
      - spoofing（なりすまし）
      - tampering（かいざん）
      - repudiation（否認）
      - information disclosure（情報漏洩）
      - denial of service（サービス拒否）
      - elevation of privilege（権限昇格）

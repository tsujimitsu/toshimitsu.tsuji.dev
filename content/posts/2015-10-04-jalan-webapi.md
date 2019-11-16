---
title: Jalan WebAPI
slug: jalan-webapi
tags:
- "webapi"
date: 2015-10-04T00:00:00+09:00
draft: false
---

じゃらんWebサービスとは
---------------------------
* じゃらんnetが提供する宿泊宿、空室検索用WebAPI

API の種類
------------
* じゃらん宿表示API（アドバンス）
* じゃらん宿表示API（ライト）
* 空室検索API
* エリア検索API
* 温泉検索API

APIの制限
-----------
* 特定IPアドレスからの一定時間内での連続アクセスは制限される。（制限条件は非公開）

API の取得
------------
* 以下のページからアカウント登録することでAPI-KEYがメール送付される。
* https://www.jalan.net/jw/jwp0400/jww0401.do

API の利用例
---------------
* リクエストURL: http://jws.jalan.net/APILite/HotelSearch/V1/?
* key: API-KEY
* pref: 都道府県に割り当てられたコード
* http://jws.jalan.net/APILite/HotelSearch/V1/?key=XXXXXX&pref=270000
* 結果は XML 形式で返却される。API利用制限等のエラー時はエラーXMLが返却される。

```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <Error xmlns="jws">
         <Message>アクセスが拒否されました。</Message>
    </Error>
```

jalan のエリア横断検索
-------------------------
* jalan のWeb検索には複数エリアをまたいでの検索機能がなかったのでAPIで実装。
* [jalan 横断検索](https://github.com/tsujimitsu/jalan-webapi)

コメント
---------
* 都道府県をキーにした検索ができない点が不便。検索結果が多くなるから？
* APIの利用制限が厳しい。一定期間連続アクセスがあると遮断（HTTP 406が返却される）されるとあるが、2分に一回の間隔でもNGになるため使いづらい。

reference
-----------
* [じゃらんWebサービス](http://www.jalan.net/jw/jwp0000/jww0001.do)
* [じゃらんWebサービス エリアコード](http://www.jalan.net/jalan/doc/jws/data/area.html)
* [じゃらんAPIを使ってさまざまな条件から日本中の宿と温泉を検索してみよう](http://www.mdn.co.jp/di/articles/333/?page=8)

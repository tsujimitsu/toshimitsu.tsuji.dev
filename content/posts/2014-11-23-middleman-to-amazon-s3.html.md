---
title: Middleman to Amazon S3
slug: middleman-to-amazon-s3
tags:
- "middleman"
- "aws"
date: 2014-11-23T00:00:00+09:00
draft: false
---

# AWS にデプロイ用ユーザを作成
* IAM(Identity and Access Management)でTravis CIからのデプロイ用ユーザ作成
* デプロイ用ユーザにAmazon S3更新権限を付与（Attach User PolicyからAmazon S3 Full Access)

# Amazon S3 にバケツ（公開用フォルダ）作成
* Amazon S3にバケツを作成。PropertiesからStatic Website HostingをEnable website hostingにする。
* Index Documentにindex.htmlを指定

# Travis CI の設定
AWSデプロイ用ユーザ作成時のAccess Key IDを暗号化

```yaml
# travis encrypt -r tsujimitsu/codelogue ***********
Please add the following to your .travis.yml file:

  secure: "**********"
```

同じ要領でSecret Access Keyも暗号化（-rの後ろはgithubのリポジトリを指定）

```yaml
travis encrypt -r tsujimitsu/codelogue **********
Please add the following to your .travis.yml file:

  secure: "**********"
```

travis.ymlに追記

```yaml
language: ruby
script: bundle exec middleman build && ls -la ./build

deploy:
  provider: s3
  access_key_id:
    secure: "GrfP2+eeRuTS/NS8ulOOC1Qe+rB2u52V/h2mE1CPWHquPHFtlKttyo3DLqEvWca9CtfLkWaiWxRSkcB74/GOiid+hh8HM+RRKL1/35L9rnQX1RdVIROxD81N5kLTybgwl9mymvc7RyBHyh6Tn/xIZMXkLyeyLUKvdcfRSlQAfBU="
  secret_access_key:
    secure: "PYqKSxtAsO4COYENUX+Ofxvf82zhXehW81mX8aH8kALzstJ/eSCFPbLZQuebM8aiH3iBZtmllHe/4X7yXbJNBaxPnjtKeQcNufsyxADEqIitPO7vKOF7TDpV5z0UaDLb6h4ypjdhmOBY9rDKnzTJR8oreKRWOtpJCG/tDH9fwj4="
  bucket: www.codelogue.com
  region: tokyo
  endpoint: ***********************.amazonaws.com
  skip_cleanup: true
  local-dir: build/
  on:
    branch: master
```

skip_cleanupとlocal-dirが重要

# 参考
* [GitHub + Travis CI + Amazon S3 で git push で更新されるサイトをつくった](http://bouzuya.hatenablog.com/entry/2014/05/20/193328)
* [Travis - S3 Deployment](http://docs.travis-ci.com/user/deployment/s3/)
* [Sphinx のドキュメントを Travis CI でビルドし S3 にデプロイ・配信する](http://please-sleep.cou929.nu/build-deploy-devlier-sphinx-doc-with-amazon-s3.html)
* [S3 で静的ファイルなサイト立てるメモ](http://blog.katamari.co.jp/archives/260)

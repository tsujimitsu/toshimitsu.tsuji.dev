# Jenkins

* jenkins はデータベースと連携しない（ファイル DB）
* 全てのデータは /var/jenkins_home に保存されるため、persistent volume にマウントして永続化する。
  * plugin, workspace も含まれる

## docker

* デプロイ

  * https://hub.docker.com/_/jenkins/
  * https://qiita.com/momoham/items/bf69c623c8968dc4f9da

```
$ docker run -d --name myjenkins --restart always -p 8080:8080 -p 50000:50000 -v /Users/tsujimitsu/Docker/jenkins:/var/jenkins_home jenkins:2.60.3
```

* ログイン

  * http://localhost:8080/
  * 初期設定の入力項目は全て入力していないと次のページへ遷移できないので注意する

* ログ

```
$ docker logs myjenkins
$ docker logs myjenkins -f
```

* プラグイン
  * [Role-based Authorization Strategy](http://confrage.jp/jenkins%E3%81%A7%E3%82%B8%E3%83%A7%E3%83%96%E3%81%94%E3%81%A8%E3%81%AB%E6%A8%A9%E9%99%90%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B/)
  * [GitLab]()

## その他

* CI ツールとしては Drone.io も面白そう

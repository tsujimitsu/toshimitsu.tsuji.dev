# GitLab

* gitlab/gitlab-ce コンテナイメージを使う場合は、イメージ内にデータベース（postgres）も含まれている

## docker

* デプロイ

  * https://yoshinorin.net/2017/04/08/gitlab-using-by-docker/
  * https://docs.gitlab.com/omnibus/docker/

```
$ docker run -d --name mygitlab --hostname 192.168.0.5 -p 8000:80 --restart always -v /Users/tsujimitsu/Docker/gitlab/config:/etc/gitlab -v /Users/tsujimitsu/Docker/gitlab/logs:/var/log/gitlab -v /Users/tsujimitsu/Docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest


※以下のコマンドで起動するとgitlabへ接続できない
$ docker run -d --name mygitlab --hostname 192.168.0.5 --env GITLAB_OMNIBUS_CONFIG="external_url 'http://192.168.0.5:8000/'" -p 8000:80 --restart always -v /Users/tsujimitsu/Docker/gitlab/config:/etc/gitlab -v /Users/tsujimitsu/Docker/gitlab/logs:/var/log/gitlab -v /Users/tsujimitsu/Docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest
```

* ログイン

  * http://localhost:8000
  * パスワード変更後は root ユーザと変更後パスワードでログインできる

* ログ

```
$ docker logs mygitlab
$ docker logs mygitlab -f
```

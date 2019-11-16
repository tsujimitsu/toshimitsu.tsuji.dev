---
date: 2016-12-03T18:37:44+09:00
draft: false
slug: hugo-on-centos7
tags:
- "hugo"
title: Hugo on CentOS 7
---

# tl;dr
* CentOS 7上でHugoを動作させる
* 作成したコンテンツは travisでビルドし、Github Pages で公開する

# Hugo install
```
$ cat /etc/redhat-release
CentOS Linux release 7.2.1511 (Core)

$ yum -y install git go
$ yum list installed | grep -E '^git|^golang'
git.x86_64                           1.8.3.1-6.el7_2.1               @updates
golang.x86_64                        1.6.3-1.el7_2.1                 @updates
golang-bin.x86_64                    1.6.3-1.el7_2.1                 @updates
golang-src.noarch                    1.6.3-1.el7_2.1                 @updates

$ cd /opt
$ export GOPATH=$HOME/go
$ go get -v github.com/spf13/hugo
$ vi /root/.bash_profile
    PATH=$PATH:$HOME/bin:$HOME/go/bin

$ source /root/.bash_profile
$ hugo help
$ hugo version
Hugo Static Site Generator v0.18-DEV BuildDate: 2016-12-03T14:42:05+09:00

$ hugo new site my_site
$ cd my_site/
$ git clone https://github.com/rakuishi/hugo-zen.git themes/hugo-zen
$ vi archetypes/default.md
---
title: null
slug: null
draft: true
tags:
- ""
- ""
---

$ hugo new post/first_commit.md
$ vi content/post/first_commit.md
$ hugo -t hugo-zen
$ ls -l public/
drwxr-xr-x. 2 root root   62 12月  3 14:58 css
-rw-r--r--. 1 root root 1532 12月  3 15:15 index.html
-rw-r--r--. 1 root root  837 12月  3 15:15 index.xml
drwxr-xr-x. 3 root root   58 12月  3 15:15 post
-rw-r--r--. 1 root root  742 12月  3 15:15 sitemap.xml
drwxr-xr-x. 2 root root   39 12月  3 15:15 tags
```

# Setting
```
$ vi config.toml
publishdir = "docs"
```

# hugo on docker
```
$ docker build -t tsujimitsu:ci-hugo .
$ docker images
$ docker run -it tsujimitsu:ci-hugo /bin/sh
$ docker ps -a
```

# travis example
```
sudo: required

language : bash

services:
  - docker

git:
  submodules: false

before_install:
  - cd /tmp && git clone --recursive https://github.com/tsujimitsu/codelogue.com.git
  - cd /tmp/codelogue.com && rm -rf docs && mkdir docs
  - docker pull tsujimitsu/centos7-hugo

install:
  - echo "codelogue.com" >> /tmp/codelogue.com/docs/CNAME
  - docker run --name ci-hugo -i -d -v /tmp:/tmp tsujimitsu/centos7-hugo /bin/bash -c "cd /tmp/codelogue.com && /root/go/bin/hugo -v && ls -l && ls -l themes && ls -l themes/hugo-zen"
  - docker ps -a

after_success:
  - sleep 15
  - docker ps -a
  - docker logs ci-hugo
  - cd /tmp/codelogue.com
  - git add --all
  - git status
  - git commit -m 'Build article by travis-ci'
  - git push "https://${GH_TOKEN}@github.com/tsujimitsu/codelogue.com.git" master:master

env:
  global:
    secure: "XXX"
```

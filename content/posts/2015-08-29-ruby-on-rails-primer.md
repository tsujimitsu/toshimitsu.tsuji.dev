---
title: Ruby on Rails Primer
slug: ruby-on-rails-primer
tags:
- "ror"
- "ruby"
date: 2015-08-29T00:00:00+09:00
draft: false
---

# ruby on rails の特徴
* MVCモデルを採用

# Model
* Model は ActiveRecord を利用
* SQLite3, MySQL, PostgreSQL に標準対応

# View
* ERB(Embedded RuBy), Haml, Slim といったテンプレートエンジンを利用

# Controller
* Action(GET, POST, PATCH(PUT), DELETE) を定義

# install(centos)
```
    # ruby -v
    ruby 2.1.2p95 (2014-05-08 revision 45877) [x86_64-linux]
    
    # gem install rails
    # gem list rails
    *** LOCAL GEMS ***

    rails (4.2.4)
    rails-deprecated_sanitizer (1.0.3)
    rails-dom-testing (1.0.7)
    rails-html-sanitizer (1.0.2)
    sprockets-rails (3.0.0.beta2)

    # rbenv rehash
    # rails -v
    Rails 4.2.4

    # cd /opt/; pwd
    # rails new book_library
    # cd book_library

    # vim Gemfile
    gem 'rb-readline'

    # bundle install --path vendor/bundle

    # bundle exec rails generate scaffold book title:string author:string outline:text
    # bundle exec rake db:migrate
    # bundle exec rails server
```

# Management version
```
    # cd /opt/book_library; pwd
    # git init
    # vim .gitignore
    doc/
    *.swp
    *~
    .project
    .DS_Store
    .idea
    .secret

    # git add .
    # git status
    # git commit -m "initialize repository"
    # git log
    commit c1740fbff8c95ddf37b4e166d660ce42aee6d033
    Author: tsujimitsu <tsujimitsu@codelogue.com>
    Date:   Sun Aug 30 15:33:17 2015 +0900

    initialize repository

    # rm -rf app
    # ls -ld app
    ls: cannot access app: No such file or directory

    # git checkout -f
    # ls -ld app
    drwxr-xr-x 8 root root 4096 2015-08-30 15:47 app

    # git branch
    * master
    # git checkout -b modify-readme
    # git branch
      master
    * modify-readme

    # git mv README.rdoc README.md
    # git commit -a -m "Improve the README file"

    # git branch
      master
    * modify-readme
    # git checkout master
    # git branch
    * master
      modify-readme

    # git merge modify-readme
    # git branch -d modify-readme

    # vim Gemfile
    group :production do
      gem 'pg'
      gem 'rails_12factor'
    end
```

# Database
* Active Record 経由での接続設定は config/database.yml で行う。

# Contents
* 静的コンテンツは root/public 配下に配置する。
* root へのアクセスをコントローラで処理する場合は public/index.html は削除しておく。
* 部分でンプレートは「_form.html.erb」のようにアンダーバーで始める

# Heroku
```
    # cd /tmp; pwd
    # wget -O- https://toolbelt.heroku.com/install.sh | sh
    # vim /root/.bashrc
    PATH=$PATH:/usr/local/heroku/bin
    # source /root/.bashrc
    # heroku version
    heroku-toolbelt/3.41.4 (x86_64-linux) ruby/2.1.2
    You have no installed plugins.
  
    # heroku login
    # cd /opt/book_library/; pwd
    # heroku create
    # git push heroku master

    heroku はsqliteに対応していなかったのでpostgresqlへ変更予定
```

# Ruby
```
    クラスのgetterは「attr_reader」で一元定義できる
    クラスのsetterは「attr_writer」で一元定義できる
    上記２つは「attr_accessor」でまとめて定義できる

    クラスメソッドは以下のようにクラス名を含めて定義する
    def Classname.data
    end
    もしくは
    def self.data
    end
    クラス変数は@@で定義する
```

# ruby on rails
* link_to helper でリンクは表示させる
* リンクは名前付きルートで指定可能（/aboutであれば about_path とか）
* view の共通部分は「application.html.erb」に記載される
* rails console でCLI操作できる
* rails console を見やすくするhirb, pry-rails, hirb-unicode
* rails ではメソッド（GET, POST）をVERBという

# CRUD（Webサービスを構成する７つのアクション）
* create（作成）
  * new（新規作成画面）
  * create（作成・保存）
* read（取得）
  * index（一覧表示画面）
  * show（詳細表示画面）
* update（更新）
  * edit（更新画面）
  * update（更新・保存）
* delete（削除）
  * destroy（削除）

# ominiauth-facebook
```
    # vim Gemfile
    gem 'omniauth'
    gem 'omniauth-facebook'

    # bundle install --path vendor/bundle
    # vim ../config/initializers/omniauth.rb
    Rails.application.config.middleware.use OmniAuth::Builder do
      provider :facebook, ENV['FB_APP_ID'], ENV['FB_SECRET']
    end

    OmniAuth.config.on_failure = Proc.new { |env|
      OmniAuth::FailureEndpoint.new(env).redirect_to_failure
    }

    ... controller などを作る...

    # bundle exec rails g model SocialProfile user:references provider uid name nickname email url image_url description other:text credentials:text raw_info:text
    # bundle exec rake db:migrate

    % facebook settings - Basic
    Display name: httpproxy
    Namespace: httpproxy
    App Domains: fbproxy.codelogue.com
    Website
    - Site URL: http://fbproxy.codelogue.com:3000/

    % facebook settings - Advanced
    Server IP Whitelist: xxx.xxx.xxx.xxx
    Valid OAuth redirect URIs: http://fbproxy.codelogue.com:3000/auth/facebook/callback
```

* [omniauthでfacebook, google+のSNS連携を実装する](http://paranishian.hateblo.jp/entry/rails/connect-facebook-and-googleplus-with-omniauth)
* [RailsでいろんなSNSとOAuth連携/ログインする方法](http://qiita.com/awakia/items/03dd68dea5f15dc46c15)
* [facebook 認証をローカル環境で実施する方法](http://g08m11.hateblo.jp/entry/2014/03/20/184525)
* [OmniAuth Strategies Facebook NoAuthorizationCodeError](http://stackoverflow.com/questions/12370056/omniauth-strategies-facebook-noauthorizationcodeerror-must-pass-either-a-code)
* [Ruby on Rails 4 - Authentication with Facebook and OmniAuth.](https://coderwall.com/p/bsfitw/ruby-on-rails-4-authentication-with-facebook-and-omniauth)
* [2015年7月9日以降にFacebook認証でメールアドレスが取れない問題とその対策](http://paiza.hatenablog.com/entry/2015/07/22/2015%E5%B9%B47%E6%9C%889%E6%97%A5%E4%BB%A5%E9%99%8D%E3%81%ABFacebook%E8%AA%8D%E8%A8%BC%E3%81%A7%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E3%81%8C%E5%8F%96%E3%82%8C%E3%81%AA%E3%81%84)
* [omniauth-facebook＋GraphAPI ver 2.4でemailフィールドが取得されない件の対応](http://qiita.com/blueplanet/items/25c815aa45cad46be73d)
* [Allow anything through CORS Policy](http://stackoverflow.com/questions/17858178/allow-anything-through-cors-policy)


# SQL
```
    bundle exec rails dbconsole
    .table
    .schema tablename
    select * from tablenamel
    .quit

    bundle exec rake db:drop:all
```

# bootstrap
```
    #rails new cafelogue --skip-bundle
    #vim Gemfile
    gem 'rb-readline'
    gem 'less-rails'
    gem 'therubyracer'
    gem 'execjs'
    gem 'twitter-bootstrap-rails'
    #bundle install --path vendor/bundle
    #bundle exec rails g scaffold user name:string password:string email:string regist_date:date
    #bundle exec rake db:migrate
    #bundle exec rails g bootstrap:install less
    #bundle exec rails g bootstrap:themed Users
```

* [RailsにBootstrapデザインを適用する](http://qiita.com/kamizuno/items/5c3ecceea5aa78e25058)


# devise_invitable
* [【ちょー簡単】Devise_Invitableを使ってユーザー招待のフローを作ってみた part.1 基本編](http://qiita.com/keisukeohta/items/e5ddf73df21fede86ddf)
* [【Rails】Deviseに招待機能をつける](http://izumin.hateblo.jp/entry/2015/01/13/232400)


# reference
* [簡単インストールから始める初心者のためのRuby on Railsチュートリアル](http://www.atmarkit.co.jp/ait/articles/1402/28/news047.html)
* [初心者は覚えておきたいRubygemsのコマンドまとめ](http://qiita.com/muran001/items/14f34b735e0a6b4af98c)
* [Ruby on Railsの環境構築とbundlerについて](http://www.task-notes.com/entry/20150108/1420648200)
* [小学生でもわかるRuby on Rails入門](http://openbook4.me/projects/92/)
* [初心者でも15分で公開できるHerokuのはじめかた](http://developers.mobage.jp/blog/how-to-use-for-beginners-heroku)

---
title: HTTPS for AWS ELB(Elastic Load Balancer)
slug: https-for-aws-elb
tags:
- "aws"
date: 2014-12-11T00:00:00+09:00
draft: false
---

# Introduction
* 本記事は[HZ Colloquium Advent Calendar](http://www.adventar.org/calendars/574) 2014の12/11分の記事です。
* 前回記事（[Welcome to WebAPI World](http://www.codelogue.com/articles/nodejs/nodejs-welcome-to-webapi-world.html)）の続きとなります。

# 前回までのあらすじ
WebAPIを作ってみたくて色々調べてみたよってところまでは話した。が、実装まではたどりつけませんでした。
せっかくのWebAPIだからロードバランサで可用性担保しつつ、SSLなセキュアAPIを実現！という夢を語りました。

# 本日のお話
「せっかく」のところを実現してみました。ロードバランサとSSL通信のことです。
具体的にはAWSのロードバランササービス「ELB(Elastic Load Balancer)」の設定と
クライアントからのHTTPS通信でのアクセスの実現です。結構ウェブ上に情報はあったので
それほど苦労もなく実現できてしまいました。
なお、下記サイトに書いてあることとほぼ同じことをやった感じ。
全て網羅されてまとめられていて大変感謝です。
* [AWSのELBにSSLを設定する（Nginx）](http://qiita.com/kntmrkm/items/19112e500b91441f276e)

# おしながき
 1. PayPalへの登録（おまけ）
 2. SSL証明書の購入手続き
 3. ELBの設定（SSL証明書の導入）
 4. ドメインとELBの紐づけ


# PayPalへの登録
SSL証明書の購入に必要だった＋初体験ってこともあったので登録してみました。
完璧には仕組みがわかってなかったんですけども、簡単に使えてます。
サービス利点としては、各ネット店舗での購入の際に毎回クレジットカード番号を
入れないといけないのを、一度PayPalにクレジット情報を登録しておけば、
PayPalとネット店舗間でお金のやり取りをやってくれるってところ。
初め理解ができなかったのは、上記以外にも「送金」ができるってところ。
日本の中では銀行以外が送金業務できないので実質は初めに行ったサービスだけ
使えるんだけど、法改正とかあるらしくて近く「送金」できるようになるみたい。
まぁネット上の銀行口座にクレジットから振り込みできるってことかな。
ちなみに、登録にはほぼ迷うことなく完了。


# SSL証明書の購入手続き
## メールアドレスの準備
SSL証明書を購入する際は、正しいドメインの所有者か確認するため（？）に
ドメイン名のメールアドレスにメールが送られてくる。
admin@codelogue.com とかを用意する（SSL証明書購入時に
いくつか選択肢がでてくるので、それを確認してから作成でもよい）
なお、独自ドメインで無料メールアドレスを持とうとすると、意外と狭き道だった。
（運よく昔作ったGoogle Appsのアカウントが有効だったため助かった）

## CSRの作成
AWSのELBに証明書を登録するためにはパスフレーズなしにする必要がある。

```sh
# 秘密鍵の作成（パスフレーズは適当に）
openssl genrsa -des3 -out aws-elb.key.pem 2048

# 秘密鍵からパスフレーズを削除
openssl rsa -in aws-elb.key.pem -out aws-elb.key_np.pem

# ディスティングイッシュネーム情報の登録
openssl req -new -key aws-elb.key_np.pem -out aws-elb.csr.pem
> JP
> Chiba
> Nantara-shi
> codelogue
> system
> api.codelogue.com

# 確認
openssl req -in aws-elb.csr.pem -text

```

* [Amazon ELB 用に、パスフレーズなしのCSRを作成する手順](http://kwstaff.tumblr.com/post/62571252341/amazon-elb-csr)
* [Apache + OpenSSL CSR生成手順 (新規)](https://www.geotrust.co.jp/support/ssl/csr/apache_openssl_new.html)

## 証明書購入
[Rapid SSL](http://www.ssl-store.jp/rapidssl/)がとにかく安いです。ssl-storeならPayPalで購入可能。1年間契約で1,150円でもてちゃうってのは凄いよね。
大手のGlobalSignとかだと1年で3,0000円以上とか。
ちなみにSSL証明書にも種類がある。簡単な分類は下記。

|種類|内容|
|:--|:--|
|ドメイン認証|暗号化通信のみ実現したいときに選択。一番安い。個人でも購入可能|
|実在認証|ドメインの所有者を確認する。組織が法的に存在していることを裏付ける|
|EV|アドレスバーが緑になるやつ。物理的に組織が存在していることを証明する。高価。1年で12万とか|

ちなみにSSL証明書にはURI固定（api.codelogue.com）のものと、ワイルドカード証明書（\*.codelogue.com）の
2種類が存在し、ワイルドカードだと\*の部分が可変となるため使い勝手が良い。が高い。RapidSSSLで1年1万円。
いくらワイルドカードといっても「hoge.api.codelogue.com」のようにサブドメインのサブみたいなのには対応できない。

ssl-storeのページで購入した後にアクティベートするときにCSRを貼り付けますけども
選択肢なにすればいいかわからなかった（ELBとかないし）
とりあえずApache opensslみたいなのを選んだけどうまくいった。


# ELBの設定（SSL証明書の導入）
* ログイン後に「EC2」を選択（ELBって独自にメニューがあるわけではないのね）
* 先メニューペインからNETWORK & SECURITYの項目にある「Load Balancer」を選択
* 「Create Load Balancer」を選択
* Load Balancer nameは適当に、LB insideには振り分け先のEC2が所属するセグメントを、
Listerner Consigurationの書き方は下記参照

|Load Balancer Protocol|Load Balancer Port|Instance Protocol|Instance Port|
|:--|:--|:--|:--|
|待ち受けプロトコル（クライアントからのアクセス想定）|待ち受けポート番号|振り分け先プロトコル|振り分け先ポート|
|ex. HTTPS|ex. 443|ex. HTTP|ex. 80|
上記の例のような設定をしておくことで、ELBがSSL通信を紐解き（復号化）を行い、配下のEC2へはHTTPで
通信を流すため、EC2に復号化の重い処理させずにすむ。なお、ELBがどれほどの復号性能を持っているかは知らない。
調べればでてくるかな。（SSL通信の終端（end-point）がELB）

* Select Certificate の欄に証明書情報を入れていく
  * Certificate Name: 適当
  * Private Key: 秘密鍵（さっき作ったやつ aws-elb.key.pem）
  * Public Key Certificate: 証明書（メールで送られてくる Web Server CERTIFICATE)
  * Certificate Chain: 中間証明書（メールで送られてくる INTERMEDIATE CA）
* Select a Cipher は「ELBSecurityPolicy-2014-10（今時点）」にしておく。POODLE対応でSSLv3が無効化状態になるっぽい。
* Configure Health Checkにはヘルスチェック用のプロトコル、ポートなどを設定する。L7レベル（HTTP）やTCPレベルを選択できる。
HTTPを選択すると接続結果が200 okでない場合はELB配下から切り離す。

# ドメインとELBの紐づけ
なんとAWSのELBはIP直接指定ができない。最初はELBにEIP（まぁ自分持ちのIPアドレスと思ってもらえれば）を紐づけすると
思っていたけどそうではなかった。以下が大変参考になる。
* [ELBへのElastic IPを割り当てる？](http://awsbeginner.seesaa.net/article/403004657.html)
ということで、DNS名をCNAMEで指定してあげれば完了。無事、https://api.codelogue.com/ でアクセスできました。
ちなみに今アクセスできないのはELBを削除しているから。だってー使わない状態でおいてても月4000円以上に
なりそうだったのでケチりました。まぁそのうちちゃんと公開します。

# 参考
* [ロードバランサーの SSL 証明書の更新](http://docs.aws.amazon.com/ja_jp/ElasticLoadBalancing/latest/DeveloperGuide/US_UpdatingLoadBalancerSSL.html)
* [誰でもできる、Amazon ELB にSSL証明書を設定する手順](http://kwstaff.tumblr.com/post/62686016527/amazon-elb-ssl)
* [ELBのセキュリティアップデートによるTLS 1.1対応](http://dev.classmethod.jp/cloud/aws/elb-security-update-for-tls1-1/)
* [Elastic Load Balancing を作成する](http://docs.aws.amazon.com/ja_jp/gettingstarted/latest/computebasics-linux/getting-started-create-lb.html)
* [Amazonのロードバランサーの使い方](http://www.submit.ne.jp/1579)
* [ドメイン名を使ってEC2を運用していたら、ELBのスケールアウトで苦労した話](http://mugenup-tech.hatenadiary.com/entry/2014/05/12/104009)
* [ELBを使ってアクセス元のIPを取る方法 ELBに限らないよ](http://tech.basicinc.jp/AWS/2013/04/28/aws_elb_customlog/)
* [AWS Elastic Load Balancer と Apache を使って HTTPS(SSL) 通信を行うための設定方法](http://d.hatena.ne.jp/komiyak/20130807/1375845025)

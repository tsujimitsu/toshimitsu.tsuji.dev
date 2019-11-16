# Kubernetes Meetup Tokyo #11

* KubeConのrecap

## セキュリティ関連　Ian Lewis (Google)
* Secure Pods
  * これからk8sに組み込みたい
  * コンテナはカーネル上で基本動くのでカーネルにバグがあるとホストが乗っ取られる可能性がある
    * ホストを乗っ取られないようにカーネル以外にも壁を作り２層にする
  * Sandbox Podsを噛ませてセキュリティをあげる
    * どうやってk8sに組み込むかはこれから（まだデザインフェーズ）

* Container Isolation at Scale (Introducing gVisor) 
  * Googleは始めコンテナをrootユーザで動かしていた
    * 割とすぐに一般ユーザで実行するようにしたらしい
  * ユーザからのデータがコンテナ内に流入してくるとコンテナのセキュリティは落ちる
    * VMで実行するとVMに割り当てるリソースが他に回せない。また一度メモリを増やすと基本減らせない
    * VMだとゲストOSが丸々動いてオーバーヘッドがある
      * Lightweightな環境を維持できなくなる
  * gVisorはSentryを使う。Sentryはユーザスペースで動くLinuxカーネルといった位置付け
    * ユーザスペースで動いているのでできることが限定される
    * ファイルシステムにはGoferが代理でアクセスする

## Performance and Scale @ Istio Service Mesh (CyberAgent)
* IstioはC++で書かれたEnvoyを通信フローの間に挟まってトラフィック操作する
* 通信のレイテンシやサービスの依存関係などを知ることができる
* Envoyを挟んでいるので処理スピードは多少遅くなる
  * adtech領域で使うにはまだレイテンシの面で厳しい
  * バージョンが上がるにつれてqpsは良くなっていっている
* 性能はVMの時と比較してk8s上だとnginxの処理性能は半分ぐらいになった
  * k8sのロードバランサはiptablesを使ったがipvsになると性能あがるかも

## SIG API Machinery Deep Dive by Aya Igarashi @ladicle (Z Lab)
* CustomResourceを使うと自由にResourceを定義できる

## Continuous Delivery Meets Custom Kubernetes Controller: A Declarative Configuration Approach by nasa9084 (日本仮想化技術株式会社)
* これまではCI/CDやるとき、Jenkinsがハブになってコンテナレジストリやk8sをコントロールしていた
  * k8sのアクセス権をjenkinsに与える必要があり少し問題
  * jenkinsではなくtravis ciなど使ってもこれは同じ
* weave fluxを使えばある程度解決する。が一長一短ある
* cvmanagerというCustomeResourceで全てのci/cdをk8s上で完結させることを目的にしている
  * ci/cdパイプラインからk8s、その逆も無いのでセキュリティがある程度上がる

## Kubernetes Multi-Cluster Operations without Federation by Junichi Yoshise @jyoshise (Hewlett Packard Enterprise)
* エンタープライズだと５−１０クラスタは持つようなイメージ
* tectonicはcluster registryとpolicyを全クラスタで同期し、federationを実現する
* kubernetes federationは本体にまだ組み込まれていない
* OperatorをCRDで定義する
  * k8sの美学に反しない実装方式がコミュニティで浸透してきている
　
## Blackholes and Wormholes: Understand and Troubleshoot the “Magic” of Kubernetes Networking by Hirofumi Ichihara @rafiror (NTT)
* k8sのネットワーク周りの話
* ベアメタルやVMの時とはネットワークの勝手がコンテナは異なっている
  * コンテナは全ての設定（FW, LB, Switchなど）がiptablesに全て乗っていたりする
  * 基本的なネットワークはLinuxカーネルに近い機能を使って実装されているので
  * VM時代はスタティックなIPを各VMが持つがコンテナは同じIPを持ち回ることはない。次に起動し直した時は変化する
  * flannelとGKEは簡単なiptables, Calico, GKE Network policy(裏でCalico動いている)はすごい量のエントリが書かれる
* k8sはネットワーク難しい。色々なところをみに行く必要がある

## Multi-Tenancy in Kubernetes: Best Practices Today, and Future Directions by Fujita Daisuke (Mercari)
* マルチテナンシーは１クラスタ内に複数のテナントを作成すること
  * 商用環境、開発環境別とかサービス別とか
  * Scheduling-related feature
    * Podに優先順位をつけられる
  * メルカリではサービス毎にクラスタを新規用意していた
    * その都度、監視エージェントとかをSREチームとして加える必要があり大変だった
    * メルカリでは今は１リージョンにprod/devクラスタを分けている
    * 今はサービス間の接続は手動だが将来的にはサービスメッシュなどで対応していきたい

## Kubernetes Contributor Summit by tnir
* aa

## Rancher2.0でkubernetes by cyberblack28
* aa

## Helmfile by mumoshu
* aa

## Microservices Development using Telepresence by vishaljayn
* aa

## Kubernetesにおける最高の認証フローを本気で考え直してみた by potsbo
* aa
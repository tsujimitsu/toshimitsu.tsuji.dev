https://store.docker.com/editions/community/docker-ce-desktop-mac
Get Docker CE for Mac (Edge)

Preference > Kubernetes
  Enable Kubernetes

## 入門 Kubernetes
* 可用性を保ちながら素早くリリースをし続けるために必要なもの
  * immutability（イミュータブル）
    * 一度リリースした物件には変更を加えない。変更する場合は別のリリース物件として出す
    * apt-getでパッケージをアップデートしてシステムを最新化していくやり方はミュータブル
  * declarative configuration（宣言的設定）
    * あるべき状態を定義する。システムがその状態を維持するように動く
    * 宣言的設定の反対は命令的設定
  * online self-healing system（自己回復するシステム）
    * 絶えず「宣言的設定」で定義された状態であり続けられるように動く
  
* コンテナの利点
  * 依存性の管理
  * カプセル化

* kubectlバージョン
  * kubenertesのツールはマイナーバージョン２つまではkubernetes APIのバージョンと後方互換性、前方互換性がある

* Pod
  * Pod内のコンテナは同一サーバ上で起動する
  * Podは同一IPとポートを持つ
  * Podのデプロイ情報はPodマニフェストに記述する.通常は読みやすくコメント付与できるYAML形式で作成する

```
$ cat kuard-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: kuard
spec:
  containers:
  - image: gcr.io/kuar-demo/kuard-amd64:1
    name: kuard
    ports:
      - containerPort: 8080
        name: http
        protocol: TCP
```

```
※以下のコマンドはほぼ同義
$ docker run -d --name kuard --publish 8080:8080 gcr.io/kuar-demo/kuard-amd64:1
$ kubectl apply -f kuard-pod.yaml
```

* port-forward
  * ポートフォワードコマンド実行中はローカルマシンからPodにアクセスできる

```
$ kubectl port-forward kuard 8080:8080
```

* ログ情報の取得

```
$ kubectl logs kuard
$ kubectl logs -f kuard
```

* コンテナ上でコマンド実行

```
$ kubectl exec kuard date
$ kubectl exec -it kuard ash
```

* コンテナ上のファイルをローカルにコピー、その逆
  * コンテナ上にファイルをコピーする行為はアンチパターン
  * 障害時の緊急対応といったやむおえない場合にとどめておく

```
$ kubectl cp kuard:/etc/hostname ./
$ kubectl cp $HOME/config.txt kuard:/config.txt
```

* Liveness probe
  * プロセス監視によるヘルスチェックだけでなくAPレベルでチェックする方法
  * Podマニフェストにliveness probeの定義を書く
  * httpだけでなくtcpSocket, exec監視も可能

```
...
spec:
  containers:
    - image: grc.io/kuar-demo/kuard-amd64:1
      name: kuard
      livenessProbe:
        httpGet:
          path: /healthy
          port: 8080
        initialDelaySeconds: 5
        timeoutSeconds: 1
        periodSeconds: 10
        failureThreshold: 3
...
```

* Readiness probe
  * コンテナがユーザからのリクエストを処理できるか

* リソース要求とリソース使用量の制限
  * コンテナ毎にリソース最低使用量と最大使用制限が設定できる
  * 要求：requests を設定すると最低限必要なリソースを確保してくれる
  * 制限：limits を設定すると最大限利用できるリソースの制限ができる

* 永続的なディスク(PersistentVolume)
  * VolumeリソースをPodマニフェストで使う
  * spec.Volumesセクションとコンテナ定義内のvolumeMountsにそれぞれ記述する
  * ホストのディレクトリマウント、NFSやiSCSI,クラウドプロバイダのネットワークストレージを使う方法がある
    * 通常はどのホスト上でもデータを引き継ぎたいのでホストディレクトリのマウントは行わない

* Context
  * デフォルトでは "default" Namespace が Context として設定されている
  * 接続先 Context を変更する場合は以下のコマンドを使う
  * Context は異なるクラスタを管理する --cluster フラグやクラスタ認証ユーザを指定する --user フラグも使用できる

```
$ kubectl config get-contexts
$ kubectl config set-context <contextname> --namespae=<namespacename>
$ kubectl config use-context <contextname>
```

* CLI オプション
  * -o wide
    * 情報を多く表示
  * -o json/yaml
    * 表示形式変更
  * -o jsonpath --template='{XXX}'
    * JSONPathで抜き出し
  * --no-headers
    * ヘッダを表示しない

* サービスディスカバリ
  * Serviceオブジェクトを使う
    * ClusterIPを作成し、Serviceに紐づくPodに対してロードバランシングを実現する

## コマンド

* クラスタのステータス確認

```
$ kubectl get componentstatus
$ kubectl get nodes
$ kubectl describe nodes <nodename>
$ kubectl config get-contexts
```

* オブジェクトの編集

```
$ kubectl edit <ResourceName> <ObjectName>
```

* Pod作成

```
$ kubectl run kuard --image=gcr.io/kuar-demo/kuard-amd64:1
```

* Dashboardデプロイ

```
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
$ kubectl proxy
$ curl http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
-> Token
```

## 不要コンテナを削除
* docker-gc
  * kubernetesではDeamonSetで全ホスト場で実行する
    * https://github.com/kubernetes/charts/tree/master/stable/spotify-docker-gc

```
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v /etc:/etc:ro spotify/docker-gc
```

## 疑問

* kubectl describeのConditionsに表示されるOutOfDisk, MemoryPressure, DiskPressureの意味
  * Falseであれば問題ない。ex. OutOfDiskになっていないかどうか。Falseならなっていない
* kubectl get のステータス表示の意味
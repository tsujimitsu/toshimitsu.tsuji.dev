

var data = [
  {
    url: "https://toshimitsu.tsuji.dev/posts/lifehack/",
    title: "lifehack",
    date: "2019-11-16T12:02:14+09:00",
    body: "lifehack モノ作りから学べる、人生を通じて応用がききそうなこと"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/my-first-post2/",
    title: "My First Post",
    date: "2019-11-16T12:02:14+09:00",
    body: "My First Post"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/",
    title: "Posts",
    date: "2019-11-16T12:02:14+09:00",
    body: "Posts"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/test-js/",
    title: "Test JS",
    date: "2019-11-16T00:00:00+09:00",
    body: "Test JS test-js jest JavaScript テスティングフレームワーク jest でテストカバレッジを見る この頃流行りの Jest を導入して軽快に JS をテストしよう"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/development/",
    title: "development",
    date: "2019-07-17T00:00:00Z",
    body: "development npm npm がうまくインストール動かない時の対処法 proxy 環境下での npm config 設定 $ npm config set strict-ssl false $ npm config set registry http://registry.npmjs.org/ basic $ npm i $ npm ci (not update package-lock) shortid URL friendly unique short id generator lerna $ lerna publish lerna changelog CHANGELOG の自動生成 design system コンポーネントガイド。新規 PJ 参入者などにコンポーネントの使い方を示すために使える。 docz storybook とにかくコンポーネントを表示したい、簡単に使い始めたい場合は docz 開発方法論 脅威分析 脅威の主体が引き起こす脅威とそれへの対策 STRIDE（脅威分析モデルの１つ） spoofing（なりすまし） tampering（かいざん） repudiation（否認） information disclosure（情報漏洩） denial of service（サービス拒否） elevation of privilege（権限昇格）"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/devtool/",
    title: "devtool",
    date: "2019-07-17T00:00:00Z",
    body: "devtool Bitbucket: code repository(git), CI/CD pipeline, issue tracking, wiki Slack: chat communication GMail: mail client Google Hangout: Video telephone meeting Adobe XD: UI/UX design"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/git/",
    title: "git",
    date: "2019-07-17T00:00:00Z",
    body: "git git git-flow before coding $ git checkout develop $ git pull origin develop --rebase $ git checkout -b issue-XXX before push(squash) $ git commit -m 'some comment #\u0026lt;issue number\u0026gt;' $ git log $ git rebase -i HEAD~2 before push(rebase) $ git status(gs) $ git pull origin develop --rebase \u0026lt;Fix merge conflict\u0026gt; $ git add . $ git rebase --continue $ git push origin issue-XXX after push(merged to develop) $ git push origin --delete issue-XXX (Delete remote branch) $ git branch -D issue-XXX (Delete local branch) GitSheet"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/idea/",
    title: "idea",
    date: "2019-07-17T00:00:00Z",
    body: "idea EC2 起動/停止のタイミングで Slack 通知 CHANGELOG 自動生成（lerna changelog/conventional changelog） 依存 LICENSE 自動生成（license-checker/） https://kusuwada.hatenablog.com/entry/2019/02/06/114228 リリース自動化（release-it） https://www.npmjs.com/package/release-it コミットメッセージの強制（commitzen） https://blog.solunita.net/write-easy-neat-git-commit-message/"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/react/",
    title: "react",
    date: "2019-07-17T00:00:00Z",
    body: "react Component Microsoft UI Fabric React Patterns React Hooks + Redux Hooks + TypeScript で SPA を構築する MS Office 用の React framework Atlaskit Bitbucket で使われている React framework Blueprint 結構いけてる React Framework Library react-intl 多言語対応 複数の Chrome ウィンドウで同時に異なる言語設定（i18n テストに便利） react-ga Google Analytics Typescript TodoList 簡易版@Typescript+React+Redux []()"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/service/",
    title: "service",
    date: "2019-07-17T00:00:00Z",
    body: "service LogRocket 無料でユーザの行動ログを取得できる"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/vscode/",
    title: "vscode",
    date: "2019-07-17T00:00:00Z",
    body: "vscode useful shortcut key description command k o 全ての関数を閉じる command k j 全ての関数を開く Color Scheme Code Blue Ayu"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/api-management/",
    title: "API Management",
    date: "2017-11-24T00:00:00+09:00",
    body: "API Management 参考 APIマネジメント製品あれこれの比較 FinTech時代の銀行に求められるSoE/SoRアーキテクチャとAPI管理とは"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/2017-10-14-nodejs/",
    title: "Node.js",
    date: "2017-10-14T00:00:00+09:00",
    body: "Node.js Feature Non-Blocking(Asynchronous and Event Driven) callback, parallel disk access これまでの言語はWebサーバをマルチスレッドで動かすことで大量アクセスを捌いていた マルチスレッドといってもスレッド数には限界があった(C10K問題) Node.jsはcallback呼び出しによりI/Oによるブロッキングを受けないようにしシングルスレッドで大量アクセスを捌けるようにした JavaScriptのAjaxをサーバ側にも拡張している Event Loop callback関数の呼び出しをリッスンして待つ V8 JavaScript Engine(Google Chrome) is very fast NPM Node Package Manager(online repositories) $ npm install (install all the modules in package.json) $ npm install --save (add the module dependency to package.json) $ npm install \u0026lt;Module Name\u0026gt; $ npm install \u0026lt;Module Name\u0026gt; -g (dependency globally) File System File I/O require(\u0026ldquo;fs\u0026rdquo;) var fs = require(\u0026quot;fs\u0026quot;); // Synchronous read var data = fs.readFileSync(\u0026quot;input.txt\u0026quot;); // Asynchronous read fs.readFileSync(\u0026quot;input.txt\u0026quot;, function(err, data){}); Events(Event Driven) Node.js follows event-driven var event = require('events'); const myEmitter = new event.EventEmitter(); fs.readFile('test1.txt', (err, data) =\u0026gt; { console.log(data.toString()); myEmitter.emit('readFile'); }); myEmitter.on('readFile', () =\u0026gt; { console.log('Read Event Occurred'); }); Docker use docker # docker pull node:6.11.4-alpine # docker run -itd -v /opt/docker-node:/work -p 8080:8080 node:6.11.4-alpine /bin/sh # docker exec -it \u0026lt;Container ID\u0026gt; /bin/sh # docker run -it node:6.11.4-alpine /bin/sh # docker run -itd node:6.11.4-alpine /bin/sh (run background) # node -v v6.11.4 Test mochaとistanbulを使ってテストカバレッジを取得する https://photo-tea.com/p/17/javascript-test-how-to-3/ # mkdir test # npm init # npm install --save-dev istanbul mocha power-assert intelli-espower-loader # vi package.json ... \u0026quot;scripts\u0026quot;: { \u0026quot;test\u0026quot;: \u0026quot;node ./node_modules/mocha/bin/mocha --recursive -R spec\u0026quot;, \u0026quot;test-cov\u0026quot;: \u0026quot;node ./node_modules/istanbul/lib/cli.js cover _mocha -- --recursive -R spec\u0026quot; }, ... # cat hello.js console.log(hi(\u0026quot;hello\u0026quot;)); function hi(a) { return a; } function ya(a) { return a; } module.exports.hi = hi; module.exports.ya = ya; # cat test/hello.test.js 'use strict'; const assert = require('power-assert'); const myModule = require('../hello'); describe('Sample Test', function() { describe('1. Hello test', function() { it('hello', function() { assert.equal(myModule.hi('hello!'), 'hello!') }); }); }); # npm run test-cov Express (Web) https://gist.github.com/mitsuruog/fc48397a8e80f051a145 # mkdir express-tutorial # cd express-tutorial/ # npm init # npm install --save express express-generator # ./node_modules/express-generator/bin/express-cli.js sampleapp # cd sampleapp \u0026amp;\u0026amp; npm install # export PORT=8080 # npm start"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/my-second-post/",
    title: "sample",
    date: "2017-09-18T01:25:45+09:00",
    body: "sample Introduction One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. My Heading He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. My Subheading A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/motion-typo-hello/",
    title: "Motion Typo Hello",
    date: "2017-09-18T01:07:49+09:00",
    body: "Motion Typo Hello /** * 定数の宣言 */ // setTimeoutの秒数（言葉が変化する時間） var CHANGE_SPEED = 10; // setTimeoutの秒数（インターバルの時間） var INTERVAL_SPEED = 2000; // アスキーコードのミニマムリミット var MIN_ASCII_CODE = 48; // アスキーコードのマックスリミット var MAX_ASCII_CODE = 125; // 表示する言葉 var TARGET_WORDS = new Array( \"world\", \"tsujimitsu\", \"javascript\", \"art\", \"design\", \"motion\", \"typo\", \"graphic\", \"thank\", \"you\", \"very\", \"much\" ); // 表示する先（ID） var DISPLAY_ID = \"hello\"; /** * インターバルを置く．次の文字列へセットする． * * @param 文字配列 currentWordAsciiCode(array), ナンバー targetWordNumber(int) * @return true * */ function interval(currentWordAsciiCode, targetWordNumber) { // 引数targetWordNumberがundefinedなら0を代入する if (targetWordNumber == undefined) { targetWordNumber = 0; // targetWordNumberが長さを超えた場合0に戻す } else if (targetWordNumber = TARGET_WORDS.length) { targetWordNumber = 0; } var targetWordAsciiCode = new Array(); var targetWord = TARGET_WORDS[targetWordNumber]; targetWordAsciiCode = wordToAsciiCode(targetWord); currentWordAsciiCode = regulateArrayLength(currentWordAsciiCode, targetWordAsciiCode); wordMatch(currentWordAsciiCode, targetWordAsciiCode, targetWordNumber); return true; } /** * ワードをマッチさせる * * @param 文字配列 currentWordAsciiCode(array), 文字配列 targetWordAsciiCode(array), ナンバー targetWordNumber(int) * @return true * */ function wordMatch(currentWordAsciiCode, targetWordAsciiCode, targetWordNumber) { var resultMatchFlag = 1; for (i=0; itargetWordAsciiCode.length) { count = currentWordAsciiCode.length - targetWordAsciiCode.length; for(i=0; icurrentWordAsciiCode.length) { count = targetWordAsciiCode.length - currentWordAsciiCode.length; for(i=0; i"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/my-first-post/",
    title: "My First Post",
    date: "2017-09-18T01:07:49+09:00",
    body: "My First Post Test this is test posts import test print(123)"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/zero-one/",
    title: "Zero One",
    date: "2017-09-18T01:07:49+09:00",
    body: "Zero One var i,y; var html,rand; function $(id){ return document.getElementById(id) } for(i=0; i\" for(y=0; y\" + rand + \"\"; } $(\"table\").innerHTML += html + \"\" } function change() { var x,y,id; x = Math.floor( Math.random() * 19 ); y = Math.floor( Math.random() * 69 ); id = x + \"-\" + y; var target = $(id).innerHTML; if(target == 0){ $(id).innerHTML = 1; } else { $(id).innerHTML = 0; } setTimeout(\"change()\", 0.5); } change();"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/aws-iot/",
    title: "AWS IoT",
    date: "2017-08-29T00:00:00+09:00",
    body: "AWS IoT 使い方 AWS IoT 今すぐ始める 接続 -\u0026gt; デバイスの設定 今すぐ始める Linux/OSX, Node.js 接続キットのダウンロード 以下をデバイスで実行 unzip connect_device_package.zip chmod +x start.sh ./start.sh 登録 -\u0026gt; モノ モノの登録 モノの作成 セキュリティ -\u0026gt; 証明書の作成 以下のダウンロード このモノの証明書 パブリックキー プライベートキー 有効化 完了"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/hugo/",
    title: "hugo",
    date: "2017-08-29T00:00:00+09:00",
    body: "hugo Go Download # cd ~ # wget https://storage.googleapis.com/golang/go1.9.linux-amd64.tar.gz # ls -l go* -rw-r--r--. 1 root root 102601309 Aug 25 07:44 go1.9.linux-amd64.tar.gz Install # tar -C /usr/local -xzf go1.9.linux-amd64.tar.gz # ls -ld /usr/local/go/ drwxr-xr-x. 11 root root 265 Aug 25 06:51 /usr/local/go/ # vi ~/.bash_profile PATH=$PATH:$HOME/bin:/usr/local/go/bin # source ~/.bash_profile # go version go version go1.9 linux/amd64 Test # vi hello.go package main import \u0026quot;fmt\u0026quot; func main() { fmt.Printf(\u0026quot;hello, world\\n\u0026quot;) } # go run hello.go hello, world Hugo Download # cd /opt # git clone https://github.com/gohugoio/hugo # ls -ld hugo/ drwxr-xr-x. 31 root root 4096 Sep 17 23:36 hugo/ Install # cd hugo # mkdir -p src/github.com/gohugoio # ln -sf $(pwd) src/github.com/gohugoio/hugo # export GOPATH=$(pwd) # export GOBIN=$GOPATH/bin # go get # go build -o hugo main.go Setting path # vi ~/.bash_profile PATH=$PATH:$HOME/bin:/usr/local/go/bin:/opt/hugo # source ~/.bash_profile # hugo version Hugo Static Site Generator v0.28-DEV linux/amd64 BuildDate: 2017-09-18T00:09:11+09:00 Quick Start # cd /opt/ # hugo new site quickstart # cd quickstart/ # git init # git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke # echo 'theme = \u0026quot;ananke\u0026quot;' \u0026gt;\u0026gt; config.toml # hugo new posts/my-first-post.md # hugo server -D --bind=\u0026quot;0.0.0.0\u0026quot; --baseURL=\u0026quot;192.168.0.249\u0026quot; Customise # git submodule add https://github.com/Vimux/Mainroad.git themes/Mainroad # vi config.toml baseURL = \u0026quot;http://example.org/\u0026quot; languageCode = \u0026quot;en-us\u0026quot; title = \u0026quot;Mainroad\u0026quot; theme = \u0026quot;Mainroad\u0026quot; paginate = \u0026quot;10\u0026quot; [Author] # Used in authorbox name = \u0026quot;John Doe\u0026quot; bio = \u0026quot;John Doe's true identity is unknown. Maybe he is a successful blogger or writer. Nobody knows it.\u0026quot; avatar = \u0026quot;img/avatar.png\u0026quot; [Params] subtitle = \u0026quot;Just another site\u0026quot; # Subtitle of your site. Used in site header description = \u0026quot; John Doe's Personal blog about everything\u0026quot; # Description of your site. Used in meta description opengraph = true # Enable OpenGraph if true readmore = false # Show \u0026quot;Read more\u0026quot; button in list if true leftsidebar = false # Move sidebar to the left side if true authorbox = true # Show authorbox at bottom of pages if true post_navigation = true # Show post navigation at bottom of pages if true postSections = [\u0026quot;posts\u0026quot;] # the section pages to show on home page and the \u0026quot;Recent articles\u0026quot; widget #postSections = [\u0026quot;blog\u0026quot;, \u0026quot;news\u0026quot;] # alternative that shows more than one section's pages #dateformat = \u0026quot;2006-01-02\u0026quot; # change the format of dates [Params.widgets] search = true # Enable \u0026quot;Search\u0026quot; widget recent_articles = true # Enable \u0026quot;Recent articles\u0026quot; widget recent_articles_num = 5 # Set the number of articles in the \u0026quot;Recent articles\u0026quot; widget categories = true # Enable \u0026quot;Categories\u0026quot; widget tags = true # Enable \u0026quot;Tags\u0026quot; widget tags_counter = false # Enable counter for each tag in \u0026quot;Tags\u0026quot; widget (disabled by default) # vi content/posts/my-first-post.md --- title: \u0026quot;My First Post\u0026quot; date: 2017-09-18T00:15:12+09:00 draft: false --- post === abc 123 # hugo server -D --bind=\u0026quot;0.0.0.0\u0026quot; --baseURL=\u0026quot;192.168.0.249\u0026quot; Tag and Category # vi content/posts/my-first-post.md --- title: \u0026quot;My First Post\u0026quot; date: 2017-09-18T00:15:12+09:00 categories: - \u0026quot;iot\u0026quot; tags: - \u0026quot;aws\u0026quot; - \u0026quot;iot\u0026quot; draft: false --- # hugo server -D --bind=\u0026quot;0.0.0.0\u0026quot; --baseURL=\u0026quot;192.168.0.249\u0026quot; Reference layout生成時に優先されるファイル参照順"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/2016-12-12-agile/",
    title: "Agile",
    date: "2016-12-12T00:27:44+09:00",
    body: "Agile プロダクトバックログ（マスターユーザストーリー） ユーザーストーリーの集合体 100個以内（多く入れすぎない） ユーザーストーリー 受け入れ基準＝テスト可能 ストーリーは最低3～5個受け入れ基準を持つ ユーザーストーリーとして記述しにくいものは、システムにおける制約・制限に対する記述の場合が多い スプリント 1～2週間のタイムボックスで分割されている期間（分析、設計、開発、テスト、デモ、承認） スプリント完了の定義は明確にしておく（作業者と依頼者の認識は同じか？） スプリントの構成 スプリント計画ミーティング デイリースクラム スプリントレビュー 振り返り 参考にしたいアジャイル関連資料 アジャイル・スクラム導入に際して、参考にしていたサイト集 SCRUM/アジャイル開発の入門資料を全力でまとめてみた 参考書 アジャイルサムライ−達人開発者への道− SCRUM BOOT CAMP THE BOOK アジャイルな見積りと計画づくり ~価値あるソフトウェアを育てる概念と技法~ アジャイルプラクティス Memo 冬休みの宿題かな"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/2015-12-04-weekly-report/",
    title: "Weekly Report",
    date: "2016-12-04T22:46:44+09:00",
    body: "Weekly Report DockerとLinux OSのリソース共有状況の調査 dockerコンテナがホストに与える影響についてカーネル別に検証、解説されている。 2015年の情報なので今時点では再度確認が必要ですが、評価観点について 非常に参考になる記事です。 OSSのDockerコンテナ環境管理ソフト 注目の5製品紹介 2016年版 (1\u0026frasl;7) コンテナ環境管理ソフトの比較記事。2016年末版なので比較的新しい。 オーケストレータ（k8s, swarm）よりさらに上位層の話。 あまり聞きなれないソフトウェアがでてくる。Mesos, OpenShift以外は初めて知った。 コンテナ関連で面白いのはコンテナを管理するためのマネージャをコンテナ上で動作させる ソフトウェア構成が一般的になりつつあるってとこ。 Docker ドキュメント日本語化プロジェクト dockerドキュメントの日本語化プロジェクト。 githubで管理されており、プルリクで貢献できるとのこと。 Neutron networking with Red Hat Enterprise Linux OpenStack Platform Neutron関連の機能やモジュール配置についてわかりやすい図で表現されている。 Advent Calendar関連 openstackとdocker関連のAdvent Calendar。参考になりそうな情報満載。 Docker Advent Calendar 2016 CrowdWorksのDocker開発環境 OpenStack Advent Calendar 2016"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/hugo-on-centos7/",
    title: "Hugo on CentOS 7",
    date: "2016-12-03T18:37:44+09:00",
    body: "Hugo on CentOS 7 tl;dr CentOS 7上でHugoを動作させる 作成したコンテンツは travisでビルドし、Github Pages で公開する Hugo install $ cat /etc/redhat-release CentOS Linux release 7.2.1511 (Core) $ yum -y install git go $ yum list installed | grep -E '^git|^golang' git.x86_64 1.8.3.1-6.el7_2.1 @updates golang.x86_64 1.6.3-1.el7_2.1 @updates golang-bin.x86_64 1.6.3-1.el7_2.1 @updates golang-src.noarch 1.6.3-1.el7_2.1 @updates $ cd /opt $ export GOPATH=$HOME/go $ go get -v github.com/spf13/hugo $ vi /root/.bash_profile PATH=$PATH:$HOME/bin:$HOME/go/bin $ source /root/.bash_profile $ hugo help $ hugo version Hugo Static Site Generator v0.18-DEV BuildDate: 2016-12-03T14:42:05+09:00 $ hugo new site my_site $ cd my_site/ $ git clone https://github.com/rakuishi/hugo-zen.git themes/hugo-zen $ vi archetypes/default.md --- title: null slug: null draft: true tags: - \u0026quot;\u0026quot; - \u0026quot;\u0026quot; --- $ hugo new post/first_commit.md $ vi content/post/first_commit.md $ hugo -t hugo-zen $ ls -l public/ drwxr-xr-x. 2 root root 62 12月 3 14:58 css -rw-r--r--. 1 root root 1532 12月 3 15:15 index.html -rw-r--r--. 1 root root 837 12月 3 15:15 index.xml drwxr-xr-x. 3 root root 58 12月 3 15:15 post -rw-r--r--. 1 root root 742 12月 3 15:15 sitemap.xml drwxr-xr-x. 2 root root 39 12月 3 15:15 tags Setting $ vi config.toml publishdir = \u0026quot;docs\u0026quot; hugo on docker $ docker build -t tsujimitsu:ci-hugo . $ docker images $ docker run -it tsujimitsu:ci-hugo /bin/sh $ docker ps -a travis example sudo: required language : bash services: - docker git: submodules: false before_install: - cd /tmp \u0026amp;\u0026amp; git clone --recursive https://github.com/tsujimitsu/codelogue.com.git - cd /tmp/codelogue.com \u0026amp;\u0026amp; rm -rf docs \u0026amp;\u0026amp; mkdir docs - docker pull tsujimitsu/centos7-hugo install: - echo \u0026quot;codelogue.com\u0026quot; \u0026gt;\u0026gt; /tmp/codelogue.com/docs/CNAME - docker run --name ci-hugo -i -d -v /tmp:/tmp tsujimitsu/centos7-hugo /bin/bash -c \u0026quot;cd /tmp/codelogue.com \u0026amp;\u0026amp; /root/go/bin/hugo -v \u0026amp;\u0026amp; ls -l \u0026amp;\u0026amp; ls -l themes \u0026amp;\u0026amp; ls -l themes/hugo-zen\u0026quot; - docker ps -a after_success: - sleep 15 - docker ps -a - docker logs ci-hugo - cd /tmp/codelogue.com - git add --all - git status - git commit -m 'Build article by travis-ci' - git push \u0026quot;https://${GH_TOKEN}@github.com/tsujimitsu/codelogue.com.git\u0026quot; master:master env: global: secure: \u0026quot;XXX\u0026quot;"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/jenkins-ci/",
    title: "Jenkins CI",
    date: "2015-12-26T00:00:00+09:00",
    body: "Jenkins CI pytestでのCI環境 pythonのアプリケーションをjenkinsでCIする。 CentOS7へのjenkinsインストール jenkisのページでyumリポジトリとして公開されているためオンラインインストールが可能となっている。 ビルド失敗時のメール通知 何かスクリプトを噛ます必要があるものと考えていたがjenkins自体に通知設定がある。 gmail側でsmtpメール送信を許可する追加設定が必要となる。 reference pytestとjenkinsでCI環境を構築 python2と3のテスト pythonとjenkinsの連携 pythonをnoseでテスト pytestのオススメプラグイン pythonとdjango関連のテスト事情 CentOS7へのjenkinsインストール jenkinsでビルドが失敗した時にgmailにメール通知する"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/python-script-on-aws-lambda/",
    title: "Python Script on AWS Lambda",
    date: "2015-12-23T00:00:00+09:00",
    body: "Python Script on AWS Lambda Step1 select blueprint select \u0026ldquo;Lambda\u0026rdquo; from AWS Management Console select \u0026ldquo;lambda-canary\u0026rdquo; Step2 configure event sources Event source type: \u0026quot;Scheduled Event\u0026quot; Name: \u0026quot;foobar\u0026quot; Description: \u0026quot;foobar\u0026quot; Schedule: \u0026quot;rate(5 minutes)\u0026quot; Step3 configure function Name: \u0026quot;foobar\u0026quot; Description: \u0026quot;foobar\u0026quot; Runtime: \u0026quot;Python 2.7\u0026quot; function code: \u0026quot;python script\u0026quot; Handler: \u0026quot;lambda_function.lambda_handler\u0026quot; Role: \u0026quot;lambda_basic_execution\u0026quot; Memory(MB): \u0026quot;128\u0026quot; Timeout: \u0026quot;10sec\u0026quot; reference AWS Lambda��Python��Schedule���s������"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/linux-login-check/",
    title: "Linux Login Check",
    date: "2015-10-09T00:00:00+09:00",
    body: "Linux Login Check # last # last | grep \u0026quot;still logged in\u0026quot; # date; last | grep \u0026quot;still logged in\u0026quot; # last | grep -E \u0026quot;119.72.198.200|119.72.195.161\u0026quot; # last | grep -Ev \u0026quot;119.72.198.200|119.72.195.161\u0026quot; # cat /var/log/secure | grep \u0026quot;Failed password\u0026quot; # lastb | awk '{print $1}' | sort | uniq -c | sort -nr | head -10 # cat /var/log/secure | grep sshd:session # cat /etc/logrotate.conf /var/log/wtmp { monthly create 0664 root utmp minsize 1M rotate 1 } # df -h # w # iostat # top -b # vmstat # top n 1 b # top n 1 b | grep -E \u0026quot;^top|^Tasks:|^Cpu(s):|^Mem:|^Swap:\u0026quot; Linuxのメモリ空：free（１行目） + buffers + cached Linuxサーバーの不正アクセス監視コマンド Linuxサーバーへ不正ログインを試みたユーザー一覧を出すワンライナー Linuxサーバの負荷や使用率を調査するコマンドと手順 topコマンドの使い方 【RHEL】linuxのメモリ使用率(利用率)の計算方法 Linux のメモリー管理 freeコマンドの見方"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/jalan-webapi/",
    title: "Jalan WebAPI",
    date: "2015-10-04T00:00:00+09:00",
    body: "Jalan WebAPI じゃらんWebサービスとは じゃらんnetが提供する宿泊宿、空室検索用WebAPI API の種類 じゃらん宿表示API（アドバンス） じゃらん宿表示API（ライト） 空室検索API エリア検索API 温泉検索API APIの制限 特定IPアドレスからの一定時間内での連続アクセスは制限される。（制限条件は非公開） API の取得 以下のページからアカウント登録することでAPI-KEYがメール送付される。 https://www.jalan.net/jw/jwp0400/jww0401.do API の利用例 リクエストURL: http://jws.jalan.net/APILite/HotelSearch/V1/? key: API-KEY pref: 都道府県に割り当てられたコード http://jws.jalan.net/APILite/HotelSearch/V1/?key=XXXXXX\u0026amp;pref=270000 結果は XML 形式で返却される。API利用制限等のエラー時はエラーXMLが返却される。 \u0026lt;?xml version=\u0026quot;1.0\u0026quot; encoding=\u0026quot;UTF-8\u0026quot; ?\u0026gt; \u0026lt;Error xmlns=\u0026quot;jws\u0026quot;\u0026gt; \u0026lt;Message\u0026gt;アクセスが拒否されました。\u0026lt;/Message\u0026gt; \u0026lt;/Error\u0026gt; jalan のエリア横断検索 jalan のWeb検索には複数エリアをまたいでの検索機能がなかったのでAPIで実装。 jalan 横断検索 コメント 都道府県をキーにした検索ができない点が不便。検索結果が多くなるから？ APIの利用制限が厳しい。一定期間連続アクセスがあると遮断（HTTP 406が返却される）されるとあるが、2分に一回の間隔でもNGになるため使いづらい。 reference じゃらんWebサービス じゃらんWebサービス エリアコード じゃらんAPIを使ってさまざまな条件から日本中の宿と温泉を検索してみよう"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/apache-content-negotiation-settings/",
    title: "Apache Content Negotiation Settings",
    date: "2015-09-21T00:00:00+09:00",
    body: "Apache Content Negotiation Settings Apache content negotiation settings check default settings about Apache vim /etc/httpd/conf/httpd.conf # # For type maps (negotiated resources): # (This is enabled by default to allow the Apache \u0026quot;It Worked\u0026quot; page # to be distributed in multiple languages.) # AddHandler type-map var cd /var/www/html/ ls -l -rw-r--r--. 1 root root 17 Sep 21 09:49 index.en.html -rw-r--r--. 1 root root 93 Sep 21 09:49 index.html.var -rw-r--r--. 1 root root 19 Sep 21 09:50 index.ja.html cat index.html.var URI: index URI: index.en.html Content-Type: text/html Content-Language: en URI: index.ja.html Content-Type: text/html Content-Language: ja check display page (Firefox 40 - languages setting) none =\u0026gt; en-page en =\u0026gt; en-page en-us, en =\u0026gt; en-page ja, en-us, en =\u0026gt; ja-page en-us, ja, en =\u0026gt; ja-page re-setting # cat index.html.var URI: index URI: index.en.html Content-Type: text/html Content-Language: en, en-US URI: index.ja.html Content-Type: text/html Content-Language: ja, ja-JP re-check(curl) # curl -v -H 'Accept-Language: ja-JP, en;q=0.8' -I http://localhost/ none =\u0026gt; en-page en =\u0026gt; en-page en-us, en =\u0026gt; en-page ja, en-us, en =\u0026gt; ja-page en-us, ja, en =\u0026gt; en-page apache default addlanguage ca, cs, da, de, el, en, eo, es, et, fr, he, hr, it, ja, ko, ltz, nl, nn, no, pl, pt, pt-BR, ru, sv, zh-CN, zh-TW fedora language-region code ar-SA, as-IN, ast-E, bg-BG, bn-IN, bs-BA, ca-ES, cs-CZ, da-DK, de-CH, de-DE, el-GR, es-ES, fa-IR, fi-FI, fr-FR, gu-IN, he-IL, hi-IN, hr-HR, hu-HU, id-ID, is-IS, it-IT, ja-JP, kn-IN, ko-KR, lv-LV, ml-IN, mr-IN, nb-NO, nl-NL, or-IN, pa-IN, pl-PL, pt-BR, pt-PT, ru-RU, si-LK, sk-SK, sr-Cyrl-RS, sr-Latn-RS, sv-SE, ta-IN, te-IN, th-TH, uk-UA, zh-CN, zh-TW microsoft language-region code af-ZA, am-ET, ar-SA, as-IN, az-Latn-AZ, bg-BG, bn-BD, bn-IN, bs-Cyrl-BA, bs-Latn-BA, ca-ES, cs-CZ, cy-GB, da-DK, de-DE, el-GR, en-US, es-ES, et-EE, eu-ES, fa-IR, fi-FI, fil-PH, fr-FR, ga-IE, gl-ES, gu-IN, ha-Latn-NG, he-IL, hi-IN, hr-HR, hu-HU, hy-AM, id-ID, ig-NG, is-IS, it-IT, iu-Latn-CA, ja-JP, ka-GE, kk-KZ, km-KH, kn-IN, ko-KR, kok-IN, ky-KG, lb-LU, lt-LT, lv-LV, mi-NZ, mk-MK, ml-IN, mr-IN, ms-BN, ms-MY, mt-MT, nb-NO, ne-NP, nl-NL, nn-NO, nso-ZA, or-IN, pa-IN, pl-PL, pt-BR, pt-PT, quz-PE, ro-RO, ru-RU, si-LK, sk-SK, sl-SI, sq-AL, sr-Cyrl-CS, sr-Latn-CS, sv-SE, sw-KE, ta-IN, te-IN, th-TH, tn-ZA, tr-TR, tt-RU, uk-UA, ur-PK, uz-Latn-UZ, vi-VN, xh-ZA, yo-NG, zh-CN, zh-HK, zh-TW, zu-ZA ISO Language Codes(ISO 639-1 Language Codes) aa, ab, af, am, an, ar, as, ay, az, ba, be, bg, bh, bi, bn, bo, br, ca, co, cs, cy, da, de, dz, el, en, eo, es, et, eu, fa, fi, fj, fo, fr, fy, ga, gd, gl, gn, gu, gv, ha, he, iw, hi, hr, ht, hu, hy, ia, id, in, ie, ii, ik, io, is, it, iu, ja, jv, ka, kk, kl, km, kn, ko, ks, ku, ky, la, li, ln, lo, lt, lv, mg, mi, mk, ml, mn, mo, mr, ms, mt, my, na, ne, nl, no, oc, om, or, pa, pl, ps, pt, qu, rm, rn, ro, ru, rw, sa, sd, sg, sh, si, sk, sl, sm, sn, so, sq, sr, ss, st, su, sv, sw, ta, te, tg, th, ti, tk, tl, tn, to, tr, ts, tt, tw, ug, uk, ur, uz, vi, vo, wa, wo, xh, yi, ji, yo, zh, zh-Hans, zh-Hant, zu apache, microsoft, ISO Language Codes marge aa, ab, af, af-ZA, am, am-ET, an, ar, ar-SA, as, as-IN, ay, az, az-Latn-AZ, ba, be, bg, bg-BG, bh, bi, bn, bn-BD, bn-IN, bo, br, bs-Cyrl-BA, bs-Latn-BA, ca, ca-ES, co, cs, cs-CZ, cy, cy-GB, da, da-DK, de, de-DE, dz, el, el-GR, en, en-US, eo, es, es-ES, et, et-EE, eu, eu-ES, fa, fa-IR, fi, fi-FI, fil-PH, fj, fo, fr, fr-FR, fy, ga, ga-IE, gd, gl, gl-ES, gn, gu, gu-IN, gv, ha, ha-Latn-NG, he, he-IL, hi, hi-IN, hr, hr-HR, ht, hu, hu-HU, hy, hy-AM, ia, id, id-ID, ie, ig-NG, ii, ik, in, io, is, is-IS, it, it-IT, iu, iu-Latn-CA, iw, ja, ja-JP, ji, jv, ka, ka-GE, kk, kk-KZ, kl, km, km-KH, kn, kn-IN, ko, ko-KR, kok-IN, ks, ku, ky, ky-KG, la, lb-LU, li, ln, lo, lt, lt-LT, ltz, lv, lv-LV, mg, mi, mi-NZ, mk, mk-MK, ml, ml-IN, mn, mo, mr, mr-IN, ms, ms-BN, ms-MY, mt, mt-MT, my, na, nb-NO, ne, ne-NP, nl, nl-NL, nn, nn-NO, no, nso-ZA, oc, om, or, or-IN, pa, pa-IN, pl, pl-PL, ps, pt, pt-BR, pt-PT, qu, quz-PE, rm, rn, ro, ro-RO, ru, ru-RU, rw, sa, sd, sg, sh, si, si-LK, sk, sk-SK, sl, sl-SI, sm, sn, so, sq, sq-AL, sr, sr-Cyrl-CS, sr-Latn-CS, ss, st, su, sv, sv-SE, sw, sw-KE, ta, ta-IN, te, te-IN, tg, th, th-TH, ti, tk, tl, tn, tn-ZA, to, tr, tr-TR, ts, tt, tt-RU, tw, ug, uk, uk-UA, ur, ur-PK, uz, uz-Latn-UZ, vi, vi-VN, vo, wa, wo, xh, xh-ZA, yi, yo, yo-NG, zh, zh-CN, zh-HK, zh-Hans, zh-Hant, zh-TW, zu, zu-ZA comment 言語設定の大文字小文字は区別されない（ex. ja-JP, ja-jp） reference ブラウザの言語設定 - 日本語が表示されない・英語が表示される Accept-Languageを見て言語別に分けるApacheの多言語化をやってみたのでメモ Content Negotiation Language tags in HTML and XML Fedora - Language codes 言語コード Microsoft - 利用可能な言語パック 言語コードと国コード HTML Language Code Reference - ISO 639-1 Language Codes"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/ruby-on-rails-primer/",
    title: "Ruby on Rails Primer",
    date: "2015-08-29T00:00:00+09:00",
    body: "Ruby on Rails Primer ruby on rails の特徴 MVCモデルを採用 Model Model は ActiveRecord を利用 SQLite3, MySQL, PostgreSQL に標準対応 View ERB(Embedded RuBy), Haml, Slim といったテンプレートエンジンを利用 Controller Action(GET, POST, PATCH(PUT), DELETE) を定義 install(centos) # ruby -v ruby 2.1.2p95 (2014-05-08 revision 45877) [x86_64-linux] # gem install rails # gem list rails *** LOCAL GEMS *** rails (4.2.4) rails-deprecated_sanitizer (1.0.3) rails-dom-testing (1.0.7) rails-html-sanitizer (1.0.2) sprockets-rails (3.0.0.beta2) # rbenv rehash # rails -v Rails 4.2.4 # cd /opt/; pwd # rails new book_library # cd book_library # vim Gemfile gem 'rb-readline' # bundle install --path vendor/bundle # bundle exec rails generate scaffold book title:string author:string outline:text # bundle exec rake db:migrate # bundle exec rails server Management version # cd /opt/book_library; pwd # git init # vim .gitignore doc/ *.swp *~ .project .DS_Store .idea .secret # git add . # git status # git commit -m \u0026quot;initialize repository\u0026quot; # git log commit c1740fbff8c95ddf37b4e166d660ce42aee6d033 Author: tsujimitsu \u0026lt;tsujimitsu@codelogue.com\u0026gt; Date: Sun Aug 30 15:33:17 2015 +0900 initialize repository # rm -rf app # ls -ld app ls: cannot access app: No such file or directory # git checkout -f # ls -ld app drwxr-xr-x 8 root root 4096 2015-08-30 15:47 app # git branch * master # git checkout -b modify-readme # git branch master * modify-readme # git mv README.rdoc README.md # git commit -a -m \u0026quot;Improve the README file\u0026quot; # git branch master * modify-readme # git checkout master # git branch * master modify-readme # git merge modify-readme # git branch -d modify-readme # vim Gemfile group :production do gem 'pg' gem 'rails_12factor' end Database Active Record 経由での接続設定は config/database.yml で行う。 Contents 静的コンテンツは root/public 配下に配置する。 root へのアクセスをコントローラで処理する場合は public/index.html は削除しておく。 部分でンプレートは「_form.html.erb」のようにアンダーバーで始める Heroku # cd /tmp; pwd # wget -O- https://toolbelt.heroku.com/install.sh | sh # vim /root/.bashrc PATH=$PATH:/usr/local/heroku/bin # source /root/.bashrc # heroku version heroku-toolbelt/3.41.4 (x86_64-linux) ruby/2.1.2 You have no installed plugins. # heroku login # cd /opt/book_library/; pwd # heroku create # git push heroku master heroku はsqliteに対応していなかったのでpostgresqlへ変更予定 Ruby クラスのgetterは「attr_reader」で一元定義できる クラスのsetterは「attr_writer」で一元定義できる 上記２つは「attr_accessor」でまとめて定義できる クラスメソッドは以下のようにクラス名を含めて定義する def Classname.data end もしくは def self.data end クラス変数は@@で定義する ruby on rails link_to helper でリンクは表示させる リンクは名前付きルートで指定可能（/aboutであれば about_path とか） view の共通部分は「application.html.erb」に記載される rails console でCLI操作できる rails console を見やすくするhirb, pry-rails, hirb-unicode rails ではメソッド（GET, POST）をVERBという CRUD（Webサービスを構成する７つのアクション） create（作成） new（新規作成画面） create（作成・保存） read（取得） index（一覧表示画面） show（詳細表示画面） update（更新） edit（更新画面） update（更新・保存） delete（削除） destroy（削除） ominiauth-facebook # vim Gemfile gem 'omniauth' gem 'omniauth-facebook' # bundle install --path vendor/bundle # vim ../config/initializers/omniauth.rb Rails.application.config.middleware.use OmniAuth::Builder do provider :facebook, ENV['FB_APP_ID'], ENV['FB_SECRET'] end OmniAuth.config.on_failure = Proc.new { |env| OmniAuth::FailureEndpoint.new(env).redirect_to_failure } ... controller などを作る... # bundle exec rails g model SocialProfile user:references provider uid name nickname email url image_url description other:text credentials:text raw_info:text # bundle exec rake db:migrate % facebook settings - Basic Display name: httpproxy Namespace: httpproxy App Domains: fbproxy.codelogue.com Website - Site URL: http://fbproxy.codelogue.com:3000/ % facebook settings - Advanced Server IP Whitelist: xxx.xxx.xxx.xxx Valid OAuth redirect URIs: http://fbproxy.codelogue.com:3000/auth/facebook/callback omniauthでfacebook, google+のSNS連携を実装する RailsでいろんなSNSとOAuth連携/ログインする方法 facebook 認証をローカル環境で実施する方法 OmniAuth Strategies Facebook NoAuthorizationCodeError Ruby on Rails 4 - Authentication with Facebook and OmniAuth. 2015年7月9日以降にFacebook認証でメールアドレスが取れない問題とその対策 omniauth-facebook＋GraphAPI ver 2.4でemailフィールドが取得されない件の対応 Allow anything through CORS Policy SQL bundle exec rails dbconsole .table .schema tablename select * from tablenamel .quit bundle exec rake db:drop:all bootstrap #rails new cafelogue --skip-bundle #vim Gemfile gem 'rb-readline' gem 'less-rails' gem 'therubyracer' gem 'execjs' gem 'twitter-bootstrap-rails' #bundle install --path vendor/bundle #bundle exec rails g scaffold user name:string password:string email:string regist_date:date #bundle exec rake db:migrate #bundle exec rails g bootstrap:install less #bundle exec rails g bootstrap:themed Users RailsにBootstrapデザインを適用する devise_invitable 【ちょー簡単】Devise_Invitableを使ってユーザー招待のフローを作ってみた part.1 基本編 【Rails】Deviseに招待機能をつける reference 簡単インストールから始める初心者のためのRuby on Railsチュートリアル 初心者は覚えておきたいRubygemsのコマンドまとめ Ruby on Railsの環境構築とbundlerについて 小学生でもわかるRuby on Rails入門 初心者でも15分で公開できるHerokuのはじめかた"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/electron-debugging/",
    title: "Electron Debugging",
    date: "2015-08-25T00:00:00+09:00",
    body: "Electron Debugging electron でデバッグを行う方法の１つ electron-debug ツールを利用する electron-debug の利用 dir \u0026gt;index.html main.js ... npm install --save electron-debug dir \u0026gt;index.html main.js node_modules \\electron-debug ... vim main.js \u0026gt;require('electron-debug')(); vim package.json \u0026gt;\u0026quot;dependencies\u0026quot;: { \u0026quot;electron-debug\u0026quot;: \u0026quot;^0.2.0\u0026quot; } electron . \u0026gt;WindowsOSの場合は、F12でDev Tools起動、Ctrl+Rで再読み込み。 Reference sindresorhus/electron-debug"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/electron-primer/",
    title: "Electron Primer",
    date: "2015-08-25T00:00:00+09:00",
    body: "Electron Primer node のインストール windows installer(.msi) をインストール。 node -v \u0026gt; v0.12.7 Electron のインストール npm -g install electron-prebuilt \u0026gt;electron-prebuilt@0.31.0 C:\\Users\\XXXX\\AppData\\Roaming\\npm\\node_modules\\electron-prebuilt ├── extract-zip@1.0.3 (debug@0.7.4, minimist@0.1.0, async@0.9.0, yauzl@2.3.1, mkdirp@0.5.0, through2@0.6.3, concat-stream@1.5.0) └── electron-download@1.0.8 (path-exists@1.0.0, home-path@0.1.2, debug@2.2.0, mkdirp@0.5.1, mv@2.1.1, nugget@1.5.4) npm ls -g electron-prebuilt \u0026gt;└── electron-prebuilt@0.31.0 Application 作成 pwd .../node/electron-sample npm init \u0026gt; 全てEnter（デフォルト）で作成 dir \u0026gt; package.json \u0026gt;\u0026gt; package.json の main を index.jsからmain.jsへ変更している。 vim main.js vim index.html dir \u0026gt; package.json main.js index.html electron ./ Archive する npm -g install asar cd .. pwd \u0026gt; .../node asar pack ./electron-sample ./electron-sample.asar electron ./electron-sample.asar 配布用ファイルを作成する npm -g install electron-packager electron-packager ./electron-sample electron-sample --platform=darwin,win32 --arch=x64 --version=0.31.0 dir \u0026gt; electron-sample-win32-x64 \u0026gt; darwin も指定していたがWindows上で作成するとdarwinはできないのか？ Reference 30分で出来る、JavaScript (Electron) でデスクトップアプリを作って配布するまで node.js のrequire先pathにnpm -gでグローバルインストールしたのものを登録する"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/scala-primer/",
    title: "Scala Primer",
    date: "2015-08-14T00:00:00+09:00",
    body: "Scala Primer Scalaのオブジェクト シングルトンクラス = Scala のオブジェクト。 インスタンスのように複数作成はできない。 #コンパイル scalac HelloWorld.scala scala HelloWorld scalac -d classes HelloWorld.scala scala -cp classes HelloWorld for構文 ジェネレータを用いる（eachのようなもの？） for (n:Int \u0026lt;- Range(1,101)) total += n for条件にフィルタをかけることができる for (n:Int \u0026lt;- Range(1,101); if (n % 2 == 0)) total += n メソッドと関数 Java同様にメソッドが存在する object HelloWorld { def main(args: Array[String]) = { println(\u0026quot;Hello World\u0026quot;) } def pritest(s: String) = { println(s) } } App trait を使うと main メソッドを省略できる ただ、よくわからないのが実行方法によって結果が違うこと。 おそらく mainメソッドの実行方法が違うのだと思うけど詳しく調べられていない。 object HelloWorld extends App { println(\u0026quot;Hello World\u0026quot;) } \u0026gt; scala HelloWorld.scala 実行結果では何も表示されない \u0026gt; scalac HelloWorld.scala \u0026gt; scala HelloWorld printlnの結果が表示される object HelloWorld extends App { println(\u0026quot;Hello World\u0026quot;) } HelloApp.main(null) \u0026gt; scala HelloWorld.scala printlnの結果が表示される 関数オブジェクト（メソッドの中で関数定義が可能） object HelloWorld { def main(args: Array[String]) = { println(\u0026quot;Hello World\u0026quot;) val pritest = (s: String) =\u0026gt; { println(s) } } } 引数の名前指定 def func (a:Int, b:Int) func(b=1, a=2) メソッドを関数オブジェクトとして取り出す object HelloWorld { def main(args: Array[String]) = { val func = pritest _ func(1) } def pritest(num: Int) = { println(num) } } カリー化 object HelloWorld { def main(args: Array[String]) = { val pritest = preTest(1) pritest(10) } def preTest(min: Int) = (max: Int) =\u0026gt; { for(n:Int \u0026lt;- Range(min, max + 1)) println(n) } } Reference Scala Getting Started 30分でわかる（かも知れない）Scala超々入門！"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/https-for-aws-elb/",
    title: "HTTPS for AWS ELB(Elastic Load Balancer)",
    date: "2014-12-11T00:00:00+09:00",
    body: "HTTPS for AWS ELB(Elastic Load Balancer) Introduction 本記事はHZ Colloquium Advent Calendar 2014の12/11分の記事です。 前回記事（Welcome to WebAPI World）の続きとなります。 前回までのあらすじ WebAPIを作ってみたくて色々調べてみたよってところまでは話した。が、実装まではたどりつけませんでした。 せっかくのWebAPIだからロードバランサで可用性担保しつつ、SSLなセキュアAPIを実現！という夢を語りました。 本日のお話 「せっかく」のところを実現してみました。ロードバランサとSSL通信のことです。 具体的にはAWSのロードバランササービス「ELB(Elastic Load Balancer)」の設定と クライアントからのHTTPS通信でのアクセスの実現です。結構ウェブ上に情報はあったので それほど苦労もなく実現できてしまいました。 なお、下記サイトに書いてあることとほぼ同じことをやった感じ。 全て網羅されてまとめられていて大変感謝です。 * AWSのELBにSSLを設定する（Nginx） おしながき PayPalへの登録（おまけ） SSL証明書の購入手続き ELBの設定（SSL証明書の導入） ドメインとELBの紐づけ PayPalへの登録 SSL証明書の購入に必要だった＋初体験ってこともあったので登録してみました。 完璧には仕組みがわかってなかったんですけども、簡単に使えてます。 サービス利点としては、各ネット店舗での購入の際に毎回クレジットカード番号を 入れないといけないのを、一度PayPalにクレジット情報を登録しておけば、 PayPalとネット店舗間でお金のやり取りをやってくれるってところ。 初め理解ができなかったのは、上記以外にも「送金」ができるってところ。 日本の中では銀行以外が送金業務できないので実質は初めに行ったサービスだけ 使えるんだけど、法改正とかあるらしくて近く「送金」できるようになるみたい。 まぁネット上の銀行口座にクレジットから振り込みできるってことかな。 ちなみに、登録にはほぼ迷うことなく完了。 SSL証明書の購入手続き メールアドレスの準備 SSL証明書を購入する際は、正しいドメインの所有者か確認するため（？）に ドメイン名のメールアドレスにメールが送られてくる。 admin@codelogue.com とかを用意する（SSL証明書購入時に いくつか選択肢がでてくるので、それを確認してから作成でもよい） なお、独自ドメインで無料メールアドレスを持とうとすると、意外と狭き道だった。 （運よく昔作ったGoogle Appsのアカウントが有効だったため助かった） CSRの作成 AWSのELBに証明書を登録するためにはパスフレーズなしにする必要がある。 # 秘密鍵の作成（パスフレーズは適当に） openssl genrsa -des3 -out aws-elb.key.pem 2048 # 秘密鍵からパスフレーズを削除 openssl rsa -in aws-elb.key.pem -out aws-elb.key_np.pem # ディスティングイッシュネーム情報の登録 openssl req -new -key aws-elb.key_np.pem -out aws-elb.csr.pem \u0026gt; JP \u0026gt; Chiba \u0026gt; Nantara-shi \u0026gt; codelogue \u0026gt; system \u0026gt; api.codelogue.com # 確認 openssl req -in aws-elb.csr.pem -text Amazon ELB 用に、パスフレーズなしのCSRを作成する手順 Apache + OpenSSL CSR生成手順 (新規) 証明書購入 Rapid SSLがとにかく安いです。ssl-storeならPayPalで購入可能。1年間契約で1,150円でもてちゃうってのは凄いよね。 大手のGlobalSignとかだと1年で3,0000円以上とか。 ちなみにSSL証明書にも種類がある。簡単な分類は下記。 種類 内容 ドメイン認証 暗号化通信のみ実現したいときに選択。一番安い。個人でも購入可能 実在認証 ドメインの所有者を確認する。組織が法的に存在していることを裏付ける EV アドレスバーが緑になるやつ。物理的に組織が存在していることを証明する。高価。1年で12万とか ちなみにSSL証明書にはURI固定（api.codelogue.com）のものと、ワイルドカード証明書（*.codelogue.com）の 2種類が存在し、ワイルドカードだと*の部分が可変となるため使い勝手が良い。が高い。RapidSSSLで1年1万円。 いくらワイルドカードといっても「hoge.api.codelogue.com」のようにサブドメインのサブみたいなのには対応できない。 ssl-storeのページで購入した後にアクティベートするときにCSRを貼り付けますけども 選択肢なにすればいいかわからなかった（ELBとかないし） とりあえずApache opensslみたいなのを選んだけどうまくいった。 ELBの設定（SSL証明書の導入） ログイン後に「EC2」を選択（ELBって独自にメニューがあるわけではないのね） 先メニューペインからNETWORK \u0026amp; SECURITYの項目にある「Load Balancer」を選択 「Create Load Balancer」を選択 Load Balancer nameは適当に、LB insideには振り分け先のEC2が所属するセグメントを、 Listerner Consigurationの書き方は下記参照 Load Balancer Protocol Load Balancer Port Instance Protocol Instance Port 待ち受けプロトコル（クライアントからのアクセス想定） 待ち受けポート番号 振り分け先プロトコル 振り分け先ポート ex. HTTPS ex. 443 ex. HTTP ex. 80 上記の例のような設定をしておくことで、ELBがSSL通信を紐解き（復号化）を行い、配下のEC2へはHTTPで 通信を流すため、EC2に復号化の重い処理させずにすむ。なお、ELBがどれほどの復号性能を持っているかは知らない。 調べればでてくるかな。（SSL通信の終端（end-point）がELB） Select Certificate の欄に証明書情報を入れていく Certificate Name: 適当 Private Key: 秘密鍵（さっき作ったやつ aws-elb.key.pem） Public Key Certificate: 証明書（メールで送られてくる Web Server CERTIFICATE) Certificate Chain: 中間証明書（メールで送られてくる INTERMEDIATE CA） Select a Cipher は「ELBSecurityPolicy-2014-10（今時点）」にしておく。POODLE対応でSSLv3が無効化状態になるっぽい。 Configure Health Checkにはヘルスチェック用のプロトコル、ポートなどを設定する。L7レベル（HTTP）やTCPレベルを選択できる。 HTTPを選択すると接続結果が200 okでない場合はELB配下から切り離す。 ドメインとELBの紐づけ なんとAWSのELBはIP直接指定ができない。最初はELBにEIP（まぁ自分持ちのIPアドレスと思ってもらえれば）を紐づけすると 思っていたけどそうではなかった。以下が大変参考になる。 * ELBへのElastic IPを割り当てる？ ということで、DNS名をCNAMEで指定してあげれば完了。無事、https://api.codelogue.com/ でアクセスできました。 ちなみに今アクセスできないのはELBを削除しているから。だってー使わない状態でおいてても月4000円以上に なりそうだったのでケチりました。まぁそのうちちゃんと公開します。 参考 ロードバランサーの SSL 証明書の更新 誰でもできる、Amazon ELB にSSL証明書を設定する手順 ELBのセキュリティアップデートによるTLS 1.1対応 Elastic Load Balancing を作成する Amazonのロードバランサーの使い方 ドメイン名を使ってEC2を運用していたら、ELBのスケールアウトで苦労した話 ELBを使ってアクセス元のIPを取る方法 ELBに限らないよ AWS Elastic Load Balancer と Apache を使って HTTPS(SSL) 通信を行うための設定方法"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/welcome-to-webapi-world/",
    title: "Welcom to WebAPI World",
    date: "2014-12-05T00:00:00+09:00",
    body: "Welcom to WebAPI World Introduction 本記事はHZ Colloquium Advent Calendar 2014の12/5分の記事です。 今日は過激に適当な話も入れながら WebAPI について書いていく。 なお、お仕事で課題を見事に解決できず、明日死亡フラグがたっているなかでの執筆なため 全体的にテンションはおかしめ。 Atom + middleman にて配信中。やっと静的サイトジェネレータの良さがわかってきたころあい。 Welcome to WebAPI World 　これを書きながら Web2.0, Mashup などの言葉を思い出す（だいぶ昔の話なのか）。 それらを構成する要素にWebAPIってやつもあった。API (Application Programming Interface)です。 Webの技術をベースにしたAPIです。Webの技術ってなんでしょうか。それはHTTP(HTTPS)やURIのことです。 プロトコルのことです。 ここで思考をもっていってほしくない方向は「HTML = Web」って考え方です。Webページとかの延長線上の話としては 捉えないほうがよいと思います。いったん忘れましょう。 WebAPIといってもいくつか宗教があります。SOAP, WSDL, REST, RESTfulなどがそれです。 今はREST, RESTfulが全盛です。SOAPやWSDLは仕様が複雑すぎてはやらなかったらしいです。 このあたりの歴史は「Webを支える技術」に書いてます。Web関係のエンジニアはあれを読むべき。 「Web」の捉え方が少し変わるから。 REST(ful) WebAPIとは REST(REpresentation State Transfer)の略です。アーキテクチャ（設計方法？設計原則？ととらえればよいのか） の名前です。RESTな方針に沿って設計されているシステムをRESTfulなシステムというらしい。 RESTを極めたものの証なのです。下記はRESTの特徴です。4つ書きます。もう少しあった気もします。 リソース 以下は全てリソースです。 * 大阪の天気 * 俺の明日の予定 * 飲み会の写真 リソースの識別子 全てのリソースは1つ以上の識別子を持ちます。「大阪の天気」だとこうなる。なるほど、識別子とか小難しいが RESTではURIでの指定になるんですね。 http://weather.yahoo.co.jp/weather/jp/27/6200.html ちなみに1つ以上と書いたのは、上記は以下のURIでも同様だから（以下は仮ね）。つまり、同じ情報でも 捉え方は複数あるよということ。そのためにリソース自体が複数識別子で参照されることがありえる。 http://weather.yahoo.co.jp/weather/today/osaka.html どうですか？なんだかセマンティックな話ですよね。セマンティックウェブ！です。ちょっと違うけどそそるでしょ？ 統一的なインタフェース RESTはHTTPの技術の上に成り立っています。ということはHTTPの技術をそのまま使います。HTTPって メソッドを持ってるって知っていましたか？実は自分は言われるまで意識していませんでした。 それは「GET」とか「POST」といわれているやつです。あと「PUT」「DELETE」があります。他にも いくつか（拡張含めるともう数種類あります。書きません） これってHTTPのメソッドなんですね。 class HTTP { public GET() { return hoge } public POST() { return \u0026quot;200OK\u0026quot; } public PUT() { return \u0026quot;404NotFound\u0026quot; } public DELETE() { return \u0026quot;SUCCESS\u0026quot; } } まぁすさまじく適当ですが、こんなイメージなんでしょうか。基本的にこのあたりのメソッドをメインに使っていくはずです。 RESTではHTTPのメソッドを使うことになっているので、それ以外のことを考慮する必要がないんですね。そういう意味では HTTPのメソッド（API）にのっとっているので統一的ってことですね。ちなみにブラウザでURLをたたくと GETメソッドでコンテンツをとりにいくという動きになります。 ステートレス ステートレスの反対はステートフルです。どういう意味でしょうか。 * ステートレスはサーバ側で状態を管理しない。常にサーバとクライアントは疎 * ステートフルはサーバ側で状態管理をする。セッション維持とかcookieの話。 ステートレスにするとサーバとの接続維持が不要となるのでサーバリソースの解放に貢献できる。 が、認証が必要になる場合はステートレスなAPIだと毎回認証の処理が走ってかえってリソース食うか？ ちなみに tips レベルの話だが「認証」と「認可」の違いをご存じだろうか。 認証（Authentication）：本人確認（大概はIDとパスワードの対でご本人様であることを確認（認証）する。 認可（Authorization） ：リソースへのアクセス権限に沿ってアクセス制限をすること。 認証されたからといって全てのリソース（ウェブサイトとか）にアクセスできるわけではありません。 そこには、管理者しか見れない（管理者権限保持者のみ閲覧可）なページもあるわけですね。 認証で本人か確認し、認可でその人の持っている権限（ロール）に沿ってできることを制限するという考え方です。 脱線しました。脱線したついでに眠くなってきました。当然、この後RESTfulなWebAPIでなんぞやるんだろうな？って 話にはなるのですが、序盤の序盤までしか動かせなかったのでこうご期待にさせてください。 RESTfulなWebAPIの実装 最近はLAMP（Linux, Apache, MySQL, PHP）ではなくてMEAN（Mongodb, Express, AngularJS, NodeJS）らしいぜ。 ということでnodejsとexpressをインストールしてWebAPIもどきを動かしていました。次までにもうちょい発展させて 公開といきたいところです。ちなみにmongodbってスケーラブルな設計できるけどトランザクションとか機能としてないって 書いてた。配信専用？ある程度の枠組みだったらトランザクション、というか読み書きの順番は保障されるとか って話だからうまく使えばいいんだろうね。あと、HTTPSでロードバランサーかました可用性の高いいけいけなWebAPI 作りたかったけどAWSのELB(Elastic Load Balancer)高かった\u0026hellip; NWトラフィック関係なく月4000円は固定で かかりそうな勢いだった。しかもSSL証明書はでふぉで使えるものあんのかなーって安易に考えてたら なかった。かわなあきまへんのか！そこまでやるー？うーん、SSL証明書のレベル低い奴は安いって書いてたけど どんなもんなんだろうなぁ。ELBじゃなくてもLinuxでロードバランスしてもいいのか（HAProxyだっけ？）。SSLはオレオレ 証明書は自己満なのでやりたくない。「https://api.codelogue.com/」とかでかっこよくキメタイ！ 思いとしては誰でもWebAPIでお望みの情報を配信できるぜ、WebAPI基盤を作りたい。誰得ー？ P.S. WebAPIだぜ！インタフェースだぜ！とはいっても配信するコンテンツが面白くていい感じじゃないと、ただの木枠 なんだぜ\u0026hellip; 参考 http://slides.com/kbigwheel/web-api-design-good-practice#/15 http://d.hatena.ne.jp/winplus/20120701/1341108824 http://qiita.com/pink/items/f1a22840619d3b79c4f2 http://morizyun.github.io/blog/web-supporting-technology-book-review/"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/middleman-to-amazon-s3/",
    title: "Middleman to Amazon S3",
    date: "2014-11-23T00:00:00+09:00",
    body: "Middleman to Amazon S3 AWS にデプロイ用ユーザを作成 IAM(Identity and Access Management)でTravis CIからのデプロイ用ユーザ作成 デプロイ用ユーザにAmazon S3更新権限を付与（Attach User PolicyからAmazon S3 Full Access) Amazon S3 にバケツ（公開用フォルダ）作成 Amazon S3にバケツを作成。PropertiesからStatic Website HostingをEnable website hostingにする。 Index Documentにindex.htmlを指定 Travis CI の設定 AWSデプロイ用ユーザ作成時のAccess Key IDを暗号化 # travis encrypt -r tsujimitsu/codelogue *********** Please add the following to your .travis.yml file: secure: \u0026quot;**********\u0026quot; 同じ要領でSecret Access Keyも暗号化（-rの後ろはgithubのリポジトリを指定） travis encrypt -r tsujimitsu/codelogue ********** Please add the following to your .travis.yml file: secure: \u0026quot;**********\u0026quot; travis.ymlに追記 language: ruby script: bundle exec middleman build \u0026amp;\u0026amp; ls -la ./build deploy: provider: s3 access_key_id: secure: \u0026quot;GrfP2+eeRuTS/NS8ulOOC1Qe+rB2u52V/h2mE1CPWHquPHFtlKttyo3DLqEvWca9CtfLkWaiWxRSkcB74/GOiid+hh8HM+RRKL1/35L9rnQX1RdVIROxD81N5kLTybgwl9mymvc7RyBHyh6Tn/xIZMXkLyeyLUKvdcfRSlQAfBU=\u0026quot; secret_access_key: secure: \u0026quot;PYqKSxtAsO4COYENUX+Ofxvf82zhXehW81mX8aH8kALzstJ/eSCFPbLZQuebM8aiH3iBZtmllHe/4X7yXbJNBaxPnjtKeQcNufsyxADEqIitPO7vKOF7TDpV5z0UaDLb6h4ypjdhmOBY9rDKnzTJR8oreKRWOtpJCG/tDH9fwj4=\u0026quot; bucket: www.codelogue.com region: tokyo endpoint: ***********************.amazonaws.com skip_cleanup: true local-dir: build/ on: branch: master skip_cleanupとlocal-dirが重要 参考 GitHub + Travis CI + Amazon S3 で git push で更新されるサイトをつくった Travis - S3 Deployment Sphinx のドキュメントを Travis CI でビルドし S3 にデプロイ・配信する S3 で静的ファイルなサイト立てるメモ"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/lightline-vim/",
    title: "lightline.vim",
    date: "2014-11-03T00:00:00+09:00",
    body: "lightline.vim itchyny/lightline.vim lightline.vim - A light and configurable statusline/tabline for Vim VIMのステータスラインを機能拡張してくれるプラグイン。ファイル名や文字コードが表示されており、一目でわかるようになります。また、現在のモード（insert, view等）が視覚的に色で区別されるためinsertモードで操作したことによる誤入力を防止できそうです。 とりあえず、これを使っていると傍からはできる人に見えます（想定）"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/active-directory-light-weight-directory-service/",
    title: "Active Directory Light Weight Directory Service",
    date: "2013-06-24T00:00:00+09:00",
    body: "Active Directory Light Weight Directory Service 参考文献 AD LDS http://technet.microsoft.com/ja-jp/library/cc732019(v=ws.10).aspx AD LDSの概要 http://technet.microsoft.com/ja-jp/library/cc733064(v=ws.10).aspx AD LDS インスタンスとは http://technet.microsoft.com/ja-jp/library/cc770698(v=ws.10).aspx AD LDS スキーマとは http://technet.microsoft.com/ja-jp/library/cc753882(v=ws.10).aspx AD LDS レプリケーションおよび構成セットとは http://technet.microsoft.com/ja-jp/library/cc770465(v=ws.10).aspx 新しいAD LDSインスタンスの作成 http://technet.microsoft.com/ja-jp/library/cc731687(v=ws.10).aspx 既存のAD LDSインスタンスのレプリカを作成する http://technet.microsoft.com/ja-jp/library/cc725829(v=ws.10).aspx LDIF ファイルからデータをインポートする http://technet.microsoft.com/ja-jp/library/cc771986(v=ws.10).aspx アプリケーション ディレクトリ パーティションの作成 http://technet.microsoft.com/ja-jp/library/cc771757(v=ws.10).aspx ディレクトリ パーティションの操作 http://technet.microsoft.com/ja-jp/library/cc730613(v=ws.10).aspx グループ メンバーシップを管理する http://technet.microsoft.com/ja-jp/library/cc770527(v=ws.10).aspx AD LDS インスタンスのバックアップまたは復元 http://technet.microsoft.com/ja-jp/library/cc733082(v=ws.10).aspx AD DS のデータを AD LDS と同期する http://technet.microsoft.com/ja-jp/library/cc753671(v=ws.10).aspx インスタンスの操作 http://technet.microsoft.com/ja-jp/library/cc753742(v=ws.10).aspx ディレクトリ パーティションの操作 http://technet.microsoft.com/ja-jp/library/cc730613(v=ws.10).aspx 認証とアクセス制御の操作 http://technet.microsoft.com/ja-jp/library/cc732857(v=ws.10).aspx AD LDS 管理ツール http://technet.microsoft.com/ja-jp/library/cc753577(v=ws.10).aspx サービス アカウントの選択 http://technet.microsoft.com/ja-jp/library/cc742505(v=ws.10).aspx ユーザー インターフェイス: Active Directory ライトウェイト ディレクトリ サービス セットアップ ウィザード http://technet.microsoft.com/ja-jp/library/cc742414(v=ws.10).aspx Active Directory ライトウェイト ディレクトリ サービスの概要 http://technet.microsoft.com/ja-jp/library/cc754361(v=ws.10).aspx ステップ バイ ステップ ガイド - Active Directory ライトウェイト ディレクトリ サービスのレプリケーション http://technet.microsoft.com/ja-jp/library/cc731246(v=ws.10).aspx Active Directory のレプリケーションを一時的に停止する方法 http://engineermemo.wordpress.com/2009/06/17/active-directory-%E3%81%AE%E3%83%AC%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%B8%80%E6%99%82%E7%9A%84%E3%81%AB%E5%81%9C%E6%AD%A2%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/ Active Directory 関係 http://engineermemo.wordpress.com/category/active-directory/"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/dsget-command-on-adlds/",
    title: "Dsget Commnad on ADLDS",
    date: "2013-05-27T00:00:00+09:00",
    body: "Dsget Commnad on ADLDS AD LDSの役割を追加するだけでは、dsget, dsaddなどのコマンドが使えない。なので、Active Directory ドメインサービスの役割を追加して、サービスは起動せずにコマンドだけ使う。（powershellからアクセスできるが異様に遅い） http://adtan.wordpress.com/2012/02/12/%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3-%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%AE%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%81%B8%E3%81%AE%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC/ http://adtan.wordpress.com/2012/01/02/%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3-%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4/ # dsget group “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -members -s lds01:389 # dsmod group “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -addmbr “CN=test01,OU=Groups,DC=codelogue,DC=com” -s lds01:389 # dsrm “CN=test01,OU=Users,DC=codelogue,DC=com” -s lds01:389 -noprompt dsrmは削除するか確認が返ってくるのでnopromptで自動返答する"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/cli-adlds/",
    title: "CLI ADLDS",
    date: "2013-05-26T00:00:00+09:00",
    body: "CLI ADLDS ユーザグループ追加などの作業で必要となる。 Windows 2008 R2: Managing AD LDS using the AD PowerShell Module 以下はコマンド例。 New-ADUser -name “test01” -Displayname “test01” -server lds01:389 -Path “OU=Users,DC=codelogue,DC=com” Add-ADGroupMember -identity “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -member “CN=test01,OU=Users,DC=codelogue,DC=com” -partition “DC=codelogue,DC=com” -server lds01 powershellをコマンドプロンプトから呼び出してバッチ処理する http://news.mynavi.jp/column/powershell/013/index.html http://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx http://d.hatena.ne.jp/mokkyu/20080421/1208728868 ファイルを準備する C:¥Users¥Administrator¥Desktop¥Test.ps1 Import-Module ActiveDirectory New-ADUser -name “test01” -Displayname “test01” -server lds01:389 -Path “OU=Users,DC=codelogue,DC=com” Add-ADGroupMember -identity “CN=g_sales,OU=Groups,DC=codelogue,DC=com” -member “CN=test01,OU=Users,DC=codelogue,DC=com” -partition “DC=codelogue,DC=com” -server lds01 コマンドプロンプトを開く C:¥Users¥Administrator¥Desktop\u0026gt; # powershell Set-ExecutionPolicy RemoteSigned # powershell ./Test.ps1 コマンドで検索とかする http://www.upken.jp/kb/bEIQypTouWhBnzwQQlhXilmkYtAOyb.html コマンドラインからユーザ追加（ldfideコマンド） http://technet.microsoft.com/ja-jp/library/cc725619(v=ws.10).aspx"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/port-forward-on-linux/",
    title: "Port-forward on Linux",
    date: "2013-05-26T00:00:00+09:00",
    body: "Port-forward on Linux Linuxをルータ化して二つのセグメントを受け渡しする方法。 http://okwave.jp/qa/q7892385.html 上記サイトに載っている内容プラスiptablesを無効化しないとだめ。 なお、各セグメントに接続されている端末にはGATEWAYかスタティックルートをLinuxルータに向けておく必要あり。 http://lists.debian.or.jp/debian-users/200709/msg00166.html"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/firebase/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Firebase(Google) realm 利用方法 https://realm.io/docs/javascript/latest realm を link した状態で ios アプリがデプロイできない react-native run-ios コマンドで行う https://realm.io/docs/javascript/latest/#missing-realm-constructor Command $ npm install -g firebase-tools $ firebase login $ firebase init $ vi public/index.html $ firebase deploy Create CI Auth Token firebase login:ci firebase deploy --token \u0026quot;$FIREBASE_TOKEN\u0026quot;"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/adminlte/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "AdminLTE導入手順 ソースコードのダウンロード 以下のURLからZipファイルをダウンロードする https://github.com/almasaeed2010/AdminLTE/releases Zipファイルの解凍 AdminLTE-X.X.Xフォルダ配下にpractice.htmlを作成 依存ファイル Bootstrap 3 jQuery 1.11+ サポートブラウザ IE9+ Edge(latest) Firefox(latest) Safari(latest) Chrome(latest) Opera(latest) ライセンス MIT License 参考資料 Qiita - 管理画面を作る：AdminLTE 基本編"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/agile/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Agile アジャイル開発をやっていないとはどういうことか？ Design 指向 デザイン的思考が生み出す 5 つのビジネスアドバンテージ YAGNI それは YAGNI か? それとも思考停止か? Lean 今さら聞けないリーンスタートアップの基本 Scrum IPA アジャイル開発の進め方 認定スクラムマスターの俺が正しいスクラムの理論をまとめてみた Sprint アトラシアンにおける スプリント計画 の方法 5 分でわかった気になるインセプションデッキ アジャイルサムライに学ぶ、インセプションデッキの作り方社内勉強会開いた Retrospective 非スクラムチームに贈る「ふりかえり」の処方箋 Good/Bad と 事実/気持ち から始める「ふりかえり」の手引き アジャイルなレトロスペクティブのすすめ 変わらない開発現場シリーズ（MS） 『変わらない開発現場』シリーズ 情報ポインタ一覧 拝啓『変わらない開発現場』を嘆く皆様へ ～変わっていくエンタープライズ系業務システム開発とマイクロソフトエンタープライズサービスの取り組み～ Agile も DevOps も銀の弾丸なんかじゃない 業務システム開発 モダナイゼーションガイド 本番環境などという場所はない(前編) 本番環境などという場所はない(後編)"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/architecture/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Architecture kawasima アーキテクチャ大全"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/aws/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "AWS Black Belt AWS Black Belt Online Seminar 2017 AWS Elastic Beanstalk AWS Black Belt Online Seminar AWS Code Services Part 2 Certificate 業務で開発経験なしでも取れる AWS 認定デベロッパーアソシエイトの勉強法 AWS CDK cdkworkshop ALB AWS ALB でホストベースルーティング設定 サブドメイン別のホスト名でルーティング先の EC2 を分ける NLB IP ターゲットのパターンであれば、IGW や NAT Gateway がなくても EC2 と通信できる https://dev.classmethod.jp/cloud/aws/load-balancing-private-ec2-rds-nlb/ Multi-AZ で Cross-Zone 負荷分散するためには、各 AZ に１つずつの NLB 配置が必要 AWS Network Load Balancer(NLB)のソース IP とターゲットのセキュリティグループ留意点まとめ 静的な IP アドレスを持つ NLB が TLS Termination に対応してアクセスログも出力可能に！ NLB で複数 AZ 構成での挙動 Network Load Balancer（NLB）でクロスゾーン負荷分散が可能になりました NLB (Network Load Balancer)の作成メモ VPC VPC 内で作成した EC2 であれば、Private IP は EC2 が停止しても固定されて変化しない https://qiita.com/bellks51/items/42ea1696d45a1f867721"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/design/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Design UI Design Adobe XD デザイン制作が捗る、個人的におすすめな Adobe XD の便利プラグイン 20"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/docker/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Docker DCSF19 Dockerfile Best Practices"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/electron/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "electron Chromium(Chrome ブラウザのエンジン)と Node.js がランタイムになる Visual Studio Code(Microsoft)や Atom(GitHub)，Slack，Skype の開発に採用されている その他の採用事例はawesome-electronに掲載されている Install 最新版で学ぶ Electron 入門 – HTML5 で PC アプリを開発する利点と手順 Environment $ npm -v 5.8.0 $ node -v v9.8.0 npm init $ npm init (all enter) npm install $ npm i --save-dev electron $ mkdir src create entry point $ vi src/package.json { \u0026quot;main\u0026quot;: \u0026quot;main.js\u0026quot; } create app $ vi src/main.js // アプリケーション作成用のモジュールを読み込み const electron = require('electron'); const app = electron.app; const BrowserWindow = electron.BrowserWindow; const path = require('path'); const url = require('url'); // メインウィンドウ let mainWindow; function createWindow() { // メインウィンドウを作成します mainWindow = new BrowserWindow({width: 800, height: 600}); // メインウィンドウに表示するURLを指定します // （今回はmain.jsと同じディレクトリのindex.html） mainWindow.loadURL(url.format({ pathname: path.join(__dirname, 'index.html'), protocol: 'file:', slashes: true })); // デベロッパーツールの起動 mainWindow.webContents.openDevTools(); // メインウィンドウが閉じられたときの処理 mainWindow.on('closed', () =\u0026gt; { mainWindow = null; }); } // 初期化が完了した時の処理 app.on('ready', createWindow); // 全てのウィンドウが閉じたときの処理 app.on('window-all-closed', () =\u0026gt; { // macOSのとき以外はアプリケーションを終了させます if (process.platform !== 'darwin') { app.quit(); } }); // アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時） app.on('activate', () =\u0026gt; { // メインウィンドウが消えている場合は再度メインウィンドウを作成する if (mainWindow === null) { createWindow(); } }); create view $ vi src/index.html \u0026lt;html\u0026gt; \u0026lt;head\u0026gt; \u0026lt;meta charset=\u0026quot;UTF-8\u0026quot;\u0026gt; \u0026lt;title\u0026gt;Hello World!\u0026lt;/title\u0026gt; \u0026lt;/head\u0026gt; \u0026lt;body\u0026gt; \u0026lt;h1\u0026gt;初めてのElectron\u0026lt;/h1\u0026gt; We are using node \u0026lt;script\u0026gt;document.write(process.versions.node)\u0026lt;/script\u0026gt;, Chrome \u0026lt;script\u0026gt;document.write(process.versions.chrome)\u0026lt;/script\u0026gt;, and Electron \u0026lt;script\u0026gt;document.write(process.versions.electron)\u0026lt;/script\u0026gt;. \u0026lt;/body\u0026gt; \u0026lt;/html\u0026gt; app start $ npx electron src Packaging install npm $ npm i --save-dev electron-packager create app $ npx electron-packager src Electron-Firstapp --platform=darwin --arch=x64 --overwrite $ npx electron-packager src Electron-Firstapp --platform=win32 --arch=x64 --overwrite ※ MacOS上でWindows向けのビルドを行うためにはWineというプログラムが別途必要 Check $ ls -l drwxr-xr-x@ 6 tsujimitsu staff 192 4 8 18:07 Electron-Firstapp-darwin-x64 ... develop setting $ vi package.json scripts\u0026quot;: { \u0026quot;start\u0026quot;: \u0026quot;electron ./src\u0026quot;, \u0026quot;build-macOS\u0026quot;: \u0026quot;electron-packager ./src Electron-Firstapp --platform=darwin --arch=x64 --overwrite\u0026quot;, ... $ npm run start $ npm run build-macOS reference Electron アプリのウィンドウサイズ＆ポジションを復元する"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/enebular/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "enebular enebular blog enebular Advent Calendar 2016"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/gitlab/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "GitLab gitlab/gitlab-ce コンテナイメージを使う場合は、イメージ内にデータベース（postgres）も含まれている docker デプロイ https://yoshinorin.net/2017/04/08/gitlab-using-by-docker/ https://docs.gitlab.com/omnibus/docker/ $ docker run -d --name mygitlab --hostname 192.168.0.5 -p 8000:80 --restart always -v /Users/tsujimitsu/Docker/gitlab/config:/etc/gitlab -v /Users/tsujimitsu/Docker/gitlab/logs:/var/log/gitlab -v /Users/tsujimitsu/Docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest ※以下のコマンドで起動するとgitlabへ接続できない $ docker run -d --name mygitlab --hostname 192.168.0.5 --env GITLAB_OMNIBUS_CONFIG=\u0026quot;external_url 'http://192.168.0.5:8000/'\u0026quot; -p 8000:80 --restart always -v /Users/tsujimitsu/Docker/gitlab/config:/etc/gitlab -v /Users/tsujimitsu/Docker/gitlab/logs:/var/log/gitlab -v /Users/tsujimitsu/Docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest ログイン http://localhost:8000 パスワード変更後は root ユーザと変更後パスワードでログインできる ログ $ docker logs mygitlab $ docker logs mygitlab -f"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/iot/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "IoT Book Interface Interface 2019 年 11 月号　水・海洋 IoT センシング＆カメラ実験研究 Interface 2018 年 10 月号　ラズパイ・カメラ・センサ IT 農耕実験 AI Assistant 【全 67 項目】Google アシスタント(OK グーグル)でできること・使い方 ～音声操作例付き紹介～ AWS IoT AWS IoT Core リソース AWS IoT の賢い利用の仕方とプログラミングの勘所 iRobot は AWS クラウドを使用して次世代のスマートホームを開発する準備を進めている IoT OS Mongoose OS - IoT Firmware Development Framework raspberry pi Raspberry Pi で土壌湿度センサー(YL-69)から A/D コンバータ(MCP3002)を使ってデータを取ろう 初心者が始める Raspberry Pi3 で家庭菜園 IoT 化への道（まとめ）"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/jenkins/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Jenkins jenkins はデータベースと連携しない（ファイル DB） 全てのデータは /var/jenkins_home に保存されるため、persistent volume にマウントして永続化する。 plugin, workspace も含まれる docker デプロイ https://hub.docker.com/_/jenkins/ https://qiita.com/momoham/items/bf69c623c8968dc4f9da $ docker run -d --name myjenkins --restart always -p 8080:8080 -p 50000:50000 -v /Users/tsujimitsu/Docker/jenkins:/var/jenkins_home jenkins:2.60.3 ログイン http://localhost:8080/ 初期設定の入力項目は全て入力していないと次のページへ遷移できないので注意する ログ $ docker logs myjenkins $ docker logs myjenkins -f プラグイン Role-based Authorization Strategy [GitLab]() その他 CI ツールとしては Drone.io も面白そう"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/kubernetes/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "https://store.docker.com/editions/community/docker-ce-desktop-mac Get Docker CE for Mac (Edge) Preference \u0026gt; Kubernetes Enable Kubernetes 入門 Kubernetes 可用性を保ちながら素早くリリースをし続けるために必要なもの immutability（イミュータブル） 一度リリースした物件には変更を加えない。変更する場合は別のリリース物件として出す apt-getでパッケージをアップデートしてシステムを最新化していくやり方はミュータブル declarative configuration（宣言的設定） あるべき状態を定義する。システムがその状態を維持するように動く 宣言的設定の反対は命令的設定 online self-healing system（自己回復するシステム） 絶えず「宣言的設定」で定義された状態であり続けられるように動く コンテナの利点 依存性の管理 カプセル化 kubectlバージョン kubenertesのツールはマイナーバージョン２つまではkubernetes APIのバージョンと後方互換性、前方互換性がある Pod Pod内のコンテナは同一サーバ上で起動する Podは同一IPとポートを持つ Podのデプロイ情報はPodマニフェストに記述する.通常は読みやすくコメント付与できるYAML形式で作成する $ cat kuard-pod.yaml apiVersion: v1 kind: Pod metadata: name: kuard spec: containers: - image: gcr.io/kuar-demo/kuard-amd64:1 name: kuard ports: - containerPort: 8080 name: http protocol: TCP ※以下のコマンドはほぼ同義 $ docker run -d --name kuard --publish 8080:8080 gcr.io/kuar-demo/kuard-amd64:1 $ kubectl apply -f kuard-pod.yaml port-forward ポートフォワードコマンド実行中はローカルマシンからPodにアクセスできる $ kubectl port-forward kuard 8080:8080 ログ情報の取得 $ kubectl logs kuard $ kubectl logs -f kuard コンテナ上でコマンド実行 $ kubectl exec kuard date $ kubectl exec -it kuard ash コンテナ上のファイルをローカルにコピー、その逆 コンテナ上にファイルをコピーする行為はアンチパターン 障害時の緊急対応といったやむおえない場合にとどめておく $ kubectl cp kuard:/etc/hostname ./ $ kubectl cp $HOME/config.txt kuard:/config.txt Liveness probe プロセス監視によるヘルスチェックだけでなくAPレベルでチェックする方法 Podマニフェストにliveness probeの定義を書く httpだけでなくtcpSocket, exec監視も可能 ... spec: containers: - image: grc.io/kuar-demo/kuard-amd64:1 name: kuard livenessProbe: httpGet: path: /healthy port: 8080 initialDelaySeconds: 5 timeoutSeconds: 1 periodSeconds: 10 failureThreshold: 3 ... Readiness probe コンテナがユーザからのリクエストを処理できるか リソース要求とリソース使用量の制限 コンテナ毎にリソース最低使用量と最大使用制限が設定できる 要求：requests を設定すると最低限必要なリソースを確保してくれる 制限：limits を設定すると最大限利用できるリソースの制限ができる 永続的なディスク(PersistentVolume) VolumeリソースをPodマニフェストで使う spec.Volumesセクションとコンテナ定義内のvolumeMountsにそれぞれ記述する ホストのディレクトリマウント、NFSやiSCSI,クラウドプロバイダのネットワークストレージを使う方法がある 通常はどのホスト上でもデータを引き継ぎたいのでホストディレクトリのマウントは行わない Context デフォルトでは \u0026ldquo;default\u0026rdquo; Namespace が Context として設定されている 接続先 Context を変更する場合は以下のコマンドを使う Context は異なるクラスタを管理する \u0026ndash;cluster フラグやクラスタ認証ユーザを指定する \u0026ndash;user フラグも使用できる $ kubectl config get-contexts $ kubectl config set-context \u0026lt;contextname\u0026gt; --namespae=\u0026lt;namespacename\u0026gt; $ kubectl config use-context \u0026lt;contextname\u0026gt; CLI オプション -o wide 情報を多く表示 -o json/yaml 表示形式変更 -o jsonpath \u0026ndash;template=\u0026lsquo;{XXX}\u0026rsquo; JSONPathで抜き出し \u0026ndash;no-headers ヘッダを表示しない サービスディスカバリ Serviceオブジェクトを使う ClusterIPを作成し、Serviceに紐づくPodに対してロードバランシングを実現する コマンド クラスタのステータス確認 $ kubectl get componentstatus $ kubectl get nodes $ kubectl describe nodes \u0026lt;nodename\u0026gt; $ kubectl config get-contexts オブジェクトの編集 $ kubectl edit \u0026lt;ResourceName\u0026gt; \u0026lt;ObjectName\u0026gt; Pod作成 $ kubectl run kuard --image=gcr.io/kuar-demo/kuard-amd64:1 Dashboardデプロイ $ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml $ kubectl proxy $ curl http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/ -\u0026gt; Token 不要コンテナを削除 docker-gc kubernetesではDeamonSetで全ホスト場で実行する https://github.com/kubernetes/charts/tree/master/stable/spotify-docker-gc docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v /etc:/etc:ro spotify/docker-gc 疑問 kubectl describeのConditionsに表示されるOutOfDisk, MemoryPressure, DiskPressureの意味 Falseであれば問題ない。ex. OutOfDiskになっていないかどうか。Falseならなっていない kubectl get のステータス表示の意味"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/kubernetes_meetup_tokyo_11/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Kubernetes Meetup Tokyo #11 KubeConのrecap セキュリティ関連　Ian Lewis (Google) Secure Pods これからk8sに組み込みたい コンテナはカーネル上で基本動くのでカーネルにバグがあるとホストが乗っ取られる可能性がある ホストを乗っ取られないようにカーネル以外にも壁を作り２層にする Sandbox Podsを噛ませてセキュリティをあげる どうやってk8sに組み込むかはこれから（まだデザインフェーズ） Container Isolation at Scale (Introducing gVisor) Googleは始めコンテナをrootユーザで動かしていた 割とすぐに一般ユーザで実行するようにしたらしい ユーザからのデータがコンテナ内に流入してくるとコンテナのセキュリティは落ちる VMで実行するとVMに割り当てるリソースが他に回せない。また一度メモリを増やすと基本減らせない VMだとゲストOSが丸々動いてオーバーヘッドがある Lightweightな環境を維持できなくなる gVisorはSentryを使う。Sentryはユーザスペースで動くLinuxカーネルといった位置付け ユーザスペースで動いているのでできることが限定される ファイルシステムにはGoferが代理でアクセスする Performance and Scale @ Istio Service Mesh (CyberAgent) IstioはC++で書かれたEnvoyを通信フローの間に挟まってトラフィック操作する 通信のレイテンシやサービスの依存関係などを知ることができる Envoyを挟んでいるので処理スピードは多少遅くなる adtech領域で使うにはまだレイテンシの面で厳しい バージョンが上がるにつれてqpsは良くなっていっている 性能はVMの時と比較してk8s上だとnginxの処理性能は半分ぐらいになった k8sのロードバランサはiptablesを使ったがipvsになると性能あがるかも SIG API Machinery Deep Dive by Aya Igarashi @ladicle (Z Lab) CustomResourceを使うと自由にResourceを定義できる Continuous Delivery Meets Custom Kubernetes Controller: A Declarative Configuration Approach by nasa9084 (日本仮想化技術株式会社) これまではCI/CDやるとき、Jenkinsがハブになってコンテナレジストリやk8sをコントロールしていた k8sのアクセス権をjenkinsに与える必要があり少し問題 jenkinsではなくtravis ciなど使ってもこれは同じ weave fluxを使えばある程度解決する。が一長一短ある cvmanagerというCustomeResourceで全てのci/cdをk8s上で完結させることを目的にしている ci/cdパイプラインからk8s、その逆も無いのでセキュリティがある程度上がる Kubernetes Multi-Cluster Operations without Federation by Junichi Yoshise @jyoshise (Hewlett Packard Enterprise) エンタープライズだと５−１０クラスタは持つようなイメージ tectonicはcluster registryとpolicyを全クラスタで同期し、federationを実現する kubernetes federationは本体にまだ組み込まれていない OperatorをCRDで定義する k8sの美学に反しない実装方式がコミュニティで浸透してきている Blackholes and Wormholes: Understand and Troubleshoot the “Magic” of Kubernetes Networking by Hirofumi Ichihara @rafiror (NTT) k8sのネットワーク周りの話 ベアメタルやVMの時とはネットワークの勝手がコンテナは異なっている コンテナは全ての設定（FW, LB, Switchなど）がiptablesに全て乗っていたりする 基本的なネットワークはLinuxカーネルに近い機能を使って実装されているので VM時代はスタティックなIPを各VMが持つがコンテナは同じIPを持ち回ることはない。次に起動し直した時は変化する flannelとGKEは簡単なiptables, Calico, GKE Network policy(裏でCalico動いている)はすごい量のエントリが書かれる k8sはネットワーク難しい。色々なところをみに行く必要がある Multi-Tenancy in Kubernetes: Best Practices Today, and Future Directions by Fujita Daisuke (Mercari) マルチテナンシーは１クラスタ内に複数のテナントを作成すること 商用環境、開発環境別とかサービス別とか Scheduling-related feature Podに優先順位をつけられる メルカリではサービス毎にクラスタを新規用意していた その都度、監視エージェントとかをSREチームとして加える必要があり大変だった メルカリでは今は１リージョンにprod/devクラスタを分けている 今はサービス間の接続は手動だが将来的にはサービスメッシュなどで対応していきたい Kubernetes Contributor Summit by tnir aa Rancher2.0でkubernetes by cyberblack28 aa Helmfile by mumoshu aa Microservices Development using Telepresence by vishaljayn aa Kubernetesにおける最高の認証フローを本気で考え直してみた by potsbo aa"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/legacy_monolith_to_microservices/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Legacy monolith to microservices https://speakerdeck.com/mploed/from-a-legacy-monolith-to-microservices-with-domain-driven-design monolith 構造が全て悪いかといえば、そうではない 優秀な開発者は恐れている。銀の弾丸を レガシーシステムのマイクロサービス化には DDD(Domain-Driven"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/multitenant_saas_architecture/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Multi Tenant SaaS Architecture General コンポツさん マルチテナントアーキテクチャについて IBM Web アプリケーションをマルチテナント型 SaaS ソリューションに変換する AWS SaaS on AWS アーキテクチャと７つのベストプラクティス YouTube 知られざる「マルチテナントアーキテクチャ」（1）～ SaaS はみんな同じではない？ 知られざる「マルチテナントアーキテクチャ」（2）～スケーラビリティのカギは組織 ID 知られざる「マルチテナントアーキテクチャ」（3）～スキーマとメタデータの謎 Force.com のマルチテナントアーキテクチャ cybozu.com の生みの親が自作クラウド派になった理由 Building and Growing SaaS on AWS for Partners AWS re:Invent 2016: Architecting Next Generation SaaS Applications on AWS (ARC301) AWS re:Invent 2015 | (ARC340) Multi-Tenant Application Deployment Models [レポート] ARC327 – Hands-on SaaS: AWS におけるマルチテナントソリューションの構築 #reinvent RDB を使わない究極のマルチテナント AWS Modeling SaaS Tenant Profiles on AWS AWS SaaS ファクトリー AWS SaaS Portal マルチテナント時代におけるテスト・ベストプラクティス Multi-Tenant Authentication with AWS Cognito ARC327 – Hands-on SaaS: AWS におけるマルチテナントソリューションの構築 #reinvent"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/netlify/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Netlify Netlify で静的サイトをホスティング https://www.d4af.com/post/2017/10/netlify1/ 独自ドメイン設定 https://www.d4af.com/post/2017/10/netlify2/ HTTPS 設定 強制 HTTPS 設定"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/node-red/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Node-RED Node-RED で raspberry pi のリソース監視"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/nuxtjs/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Nuxt.js mkdir nuxtjs cd nuxtjs npm install vue-cli mkdir nuxt_test ./node_modules/vue-cli/bin/vue init nuxt-community/starter-template nuxt_test/src cd nuxt_test/src npm install npm install @nuxtjs/pwa vi .gitignore sw.* vi nuxt.config.js }, modules: [ ['@nuxtjs/pwa', { icon: false }], ], manifest: { name: 'nuxt_test', lang: 'ja' } } cd nuxt_test/src npm run build npm run start npm run dev Reference https://inside.dmm.com/entry/2018/04/10/nuxt-firebase"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/oss-license/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "OSS License ライセンス問題（GNU AGPLv3 について） GPL と AGPL GPL クラウドサービス（SaaS）で OSS 利用時、コード公開不要 AGPL クラウドサービス（SaaS）で OSS 利用時、コード公開必要 社内利用では不問（あくまでライセンスは「他者へのソースコード公開の強制」なので、他者＝社外の人間となる） reference IoT 時代における OSS の利用と法的諸問題 Q\u0026amp;A 集"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/raspberrypi3/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Raspberry Pi 3 Model B(+) 開封時 https://kureuetan.com/web/raspberrypi/4236/ 初期設定 sudo raspi-config キーボードレイアウト タイムゾーン Wifi [2 Network Options] -\u0026gt; [N2 Wi-Fi] SSID と Key を入力する hostname -I SSH [5 Interfacing Options] -\u0026gt; [P2 SSH] アップデート sudo apt-get update sudo apt-get upgrade 初期設定 http://ykubot.com/2017/01/17/raspberry-pi-3-initialize/ https://qiita.com/diskn/items/cb06b7d81ec068febc5e 初期パスワード pi / raspberry Turn Off Bluetooth Desktop の右上から無効化する（不要な場合は） keyboard Layout 変更(Japan \u0026gt; Japanese) [4 Localisation Options] -\u0026gt; [I3 Change Keyboard Layout] Keyboard Model : Generic 105-Key (Intl) PC Keyboard layout : Other -\u0026gt; Japanese Key to function as AltGr : The default for keyboard layout Compose key : No compose key Wifi 接続設定 静的 IP 設定 Desktop の右上の Wifi アイコンを右クリック、Wireless \u0026amp; Wired Network Settings SSID と自身が接続する Wifi アクセスポイントを選択 Automatically configure empty options の選択を外し、IPv4 Address \u0026amp; Router \u0026amp; DNS Servers を入れる https://raspida.com/wifi4raspbian Wifi パスワードの暗号化 wpa_passphrase \u0026ldquo;\u0026rdquo; \u0026ldquo;\u0026ldquo; sudo vi /etc/wpa_supplicant/wpa_supplicant.conf psk の値を置き換える 初期パスワード変更 sudo su - raspi-config Change User Password タイムゾーン変更 sudo su - raspi-config Localisation Options Change Timezone Asia \u0026gt; Tokyo 起動オプションの変更 Boot Options Desktop / CLI B1 Console Reboot SSH 設定 sudo touch /boot/ssh reboot (別端末から)ssh -l pi 192.168.0.252 パスワードは raspberry Camera Raspberry Pi カメラのセットアップ方法 OS Raspberry Pi 3 を Mac でインストールして起動するまで ラズベリーパイが壊れた？！そんな時は SD カードの接続を疑おう"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/raspberrypi_bluetooth/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "raspberry pi bluetooth $ sudo adduser pi bluetooth $ newgrp bluetooth $ sudo adduser t-tsuji bluetooth $ newgrp bluetooth $ sudo shutdown -r now $ rfkill list $ sudo rfkill unblock bluetooth $ sudo setcap cap_net_raw+eip $(eval readlink -f `which node`) $ sudo systemctl status hciuart $ sudo hciconfig hci0 $ sudo hciconfig hci0 up $ sudo hciconfig hci0 reset $ sudo hcitool lescan $ bluetoothctl $ scan on $ node-red #$ sudo node-red $ sudo hcitool lescan $ sudo gatttool -b C9:12:2F:D7:A1:D8 --interactive -t random $ connect $ char-write-cmd 0x0016 570100 $ char-write-cmd 0x0016 570101 $ char-write-cmd 0x0016 570102 $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570100 $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570101 $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570102 Reference Raspberry Piでbluezを使ってBLESerialとつなぐ"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/react_react-native/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "React React は React.js(ReactJS) と記載されることもある JSX と呼ばれる記法を使う React と React Native のコードをある程度共通化する方法 https://qiita.com/tuttieee/items/7c66691fe6cc244053de#electron React を理解するためには webpack(バンドラ), babel(トランスパイラ) も理解する必要がある Create dev environment https://vitalify.jp/app-lab/react-js-20170911/ create-react-app は簡単に環境を作成できる反面、デフォルトの設定を簡単にカスタマイズできない create-react-app のボイラーテンプレートになっている registerServiceWorker とは $ export PATH=$PATH:./node_modules/.bin $ npm i --save-dev create-react-app $ create-react-app testapp $ cd testapp $ npm start ## ブラウザが開いて localhost:3000 でReactアプリが起動する $ npm run build $ ls -l build Develop $ npm start $ vi src/App.js -\u0026gt; browser auto reload Directory structure redux の導入を将来的に行うことを想定して、導入前から以下のような形になるようにしておく https://webbibouroku.com/Blog/Article/react-redux-todo $ ls -1 src App.css App.js App.test.js actions/ components/ containers/ reducers/ index.css index.js registerServiceWorker.js react-router の導入 React Router の使い方 $ npm install --save react-router-dom query-string を処理する $ npm install --save query-string redux の導入 https://webbibouroku.com/Blog/Article/react-redux-todo React Native Firebase https://qiita.com/koki_cheese/items/e9f165563b3dadb0da03 https://qiita.com/shinnoki/items/599d1aec23f12f00317b Firebase のページで firestore を有効化（テストモード） Project 作成，react-native-firebase のインストール react-native init firestoreapp cd firestoreapp/ npm install --save react-native-firebase package.json で\u0026rdquo;babel-preset-react-native\u0026rdquo;: \u0026ldquo;4.0.0\u0026rdquo;に書き換える(5.0.0 は動かない) npm install Firebase のページで iOS の追加 iOS bundle ID: com.codelogue.firestoreapp App nickname: App Store ID: Download GoogleService-info.plist をダウンロード ios/firestoreapp/GoogleService-Info.plist に保存 Xcode の Project 設定欄, General \u0026gt; Identity \u0026gt; Bundle Identifier に上記の IOS bundle ID を設定する link react-native link cocoapod インストールと設定 sudo gem install cocoapods cd ios pod init vi Podfile platform :ios, '9.0' target 'firestoreapp' do pod 'Firebase/Core' pod 'Firebase/Firestore' end pod install vi .gitignore ios/Pods vi ios/{Project Name}/AppDelegate.m #import \u0026lt;Firebase.h\u0026gt; - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions { [FIRApp configure]; vi App.js export default class App extends Component\u0026lt;Props\u0026gt; { constructor() { super(); this.ref = firebase.firestore().collection(\u0026quot;messages\u0026quot;); this.ref.add([\u0026quot;abc\u0026quot;]); } Xcode の File \u0026gt; Add File to で GoogleService-Info.plist を追加する ios/[YOUR APP NAME].xcproj の代わりに ios/[YOUR APP NAME].xcworkspace を使う React Native 環境設定 Install Xcode Run Xcode and agree license Install Homebrew $ /usr/bin/ruby -e \u0026quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\u0026quot; $ brew -v Install Nodebrew $ brew install nodebrew $ nodebrew -v $ echo 'export PATH=$PATH:$HOME/.nodebrew/current/bin' \u0026gt;\u0026gt; ~/.bash_profile Install Node.js $ mkdir -p ~/.nodebrew/src $ nodebrew ls-remote $ nodebrew install-binary v9.8.0 $ nodebrew ls $ nodebrew use v9.8.0 $ nodebrew ls $ node -v v9.8.0 $ npm -v 5.6.0 Downgrade npm $ npm install -g npm@4.6.1 $ npm -v Install watchman $ brew update $ brew install watchman Install React Native $ npm install -g create-react-native-app ※native コードを混ぜてアプリ開発する場合は上記の代わりに以下 $ npm install -g react-native-cli Create Project $ create-react-native-app MyProject $ cd MyProject $ npm start Install \u0026ldquo;Expo Client\u0026rdquo; on iPhone iPhone と開発機を同じ Wifi ネットワークに接続する Expo Client で QR コードを読み取る Got it ボタンを押す React Native 開発ライブラリ redux react-native-router-flux react-navigation redux-persist react-native-config 開発環境 Prettier ライブラリインストール $ npm install -g eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import prettier-eslint prettier-eslint-cli eslint-plugin-jest ##$ npm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import prettier-eslint prettier-eslint-cli eslint-plugin-jest Prettier, eslint の拡張機能を導入 表示\u0026gt;コマンドパレット\u0026gt;user settings { \u0026quot;editor.formatOnSave\u0026quot;: true, \u0026quot;javascript.format.enable\u0026quot;: false, \u0026quot;prettier.eslintIntegration\u0026quot;: true } Tips ナビゲーションメニューの作り方 Navigating Between Screens React Navigation を使ってみる【これからはじめる React Native】 公式マニュアルのナビゲーション説明にも出てくることから react-navigation を使う React コンポーネントを別ファイルで定義し，インポートする方法 【Q\u0026amp;A】ReactJS の Component を import,export する React Native で WordPress リーダーアプリを作ってみた # index.js import HomeScreen from './screen/HomeScreen'; # ./screen/HomeScreen import React, { Component } from 'react'; export default class HomeScreen extends Component { render() { return (); } } Camera をコントロールする react-native-camera を使用する 実機デプロイ時に node のパスエラーがでる React-Native を iOS 実機でビルドしたら，node binary が見つからないとエラーが出た件 xcode からデプロイがうまくできない Project 設定を開く（左上のプロジェクト名を選択） General \u0026gt; Identity の Bundle Identifier を変更する General \u0026gt; Signing でアカウントを追加する アカウントは Manage Certificates で iOS Deployment を作成しておく General \u0026gt; Deployment Info で Deployment Target を設定する（OS バージョン） 上記と同じことを XXXTests に対しても行う Reference Mac に Node.js をインストール ReactNative はじめの一歩 ReactNative 入門 VSCode で Prettier を入れる prettier の使い方"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/rust/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Rust “プログラミング言語 Rust: 2nd Edition”の日本語版 PDF を作成した"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/smart-speaker/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Smart Speaker Raspberry Pi と 学習リモコン（ADRSIR）で家電を操作する ラズベリー・パイ専用 学習リモコン基板 ADRSIRの使い方 Google Homeで遊ぶエンジニア21人の奇抜なHackまとめ Node-REDでGoogle Homeにテキストをしゃべらせる"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/subscription/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "Subscription サブスクリプションの分析 note"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/swagger/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "swagger express で swagger を利用する swagger Generating documentation Client API examples in index.html"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/switchbot/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "switch bot $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570100 $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570101 $ sudo gatttool -b C9:12:2F:D7:A1:D8 -t random --char-write-req -a 0x0016 -n 570102"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/tensorflow/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "tensorflow Google Colaboratory Google Colaboratory の無料 GPU 環境を使ってみた 5 分で体験するディープラーニング"
  },
  {
    url: "https://toshimitsu.tsuji.dev/posts/tool/",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: "tool document RedPen でわかりやすい技術文書を書こう 快適？ブログ執筆環境構築 Excel 仕様書と Gitbook 技術文書をソフトウェア開発する話 git ViewVC Gitiles - A simple JGit repository browser etc Pomotodo A Time Management App for the Creators"
  },
];
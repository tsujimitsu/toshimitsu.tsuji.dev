---
title: 'hugo'
date: 2017-08-29T00:00:00+09:00
draft: false
categories:
  - 'tech'
tags:
  - 'hugo'
  - 'golang'
---

## Go

1. Download

```
# cd ~
# wget https://storage.googleapis.com/golang/go1.9.linux-amd64.tar.gz
# ls -l go*
-rw-r--r--. 1 root root 102601309 Aug 25 07:44 go1.9.linux-amd64.tar.gz
```

2. Install

```
# tar -C /usr/local -xzf go1.9.linux-amd64.tar.gz
# ls -ld /usr/local/go/
drwxr-xr-x. 11 root root 265 Aug 25 06:51 /usr/local/go/

# vi ~/.bash_profile
PATH=$PATH:$HOME/bin:/usr/local/go/bin

# source ~/.bash_profile

# go version
go version go1.9 linux/amd64
```

3. Test

```
# vi hello.go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}

# go run hello.go
hello, world
```

## Hugo

1. Download

```
# cd /opt
# git clone https://github.com/gohugoio/hugo
# ls -ld hugo/
drwxr-xr-x. 31 root root 4096 Sep 17 23:36 hugo/
```

2. Install

```
# cd hugo
# mkdir -p src/github.com/gohugoio
# ln -sf $(pwd) src/github.com/gohugoio/hugo
# export GOPATH=$(pwd)
# export GOBIN=$GOPATH/bin
# go get
# go build -o hugo main.go
```

3. Setting path

```
# vi ~/.bash_profile
PATH=$PATH:$HOME/bin:/usr/local/go/bin:/opt/hugo

# source ~/.bash_profile
# hugo version
Hugo Static Site Generator v0.28-DEV linux/amd64 BuildDate: 2017-09-18T00:09:11+09:00
```

4. Quick Start

```
# cd /opt/
# hugo new site quickstart
# cd quickstart/
# git init
# git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
# echo 'theme = "ananke"' >> config.toml
# hugo new posts/my-first-post.md
# hugo server -D --bind="0.0.0.0" --baseURL="192.168.0.249"
```

5. Customise

```
# git submodule add https://github.com/Vimux/Mainroad.git themes/Mainroad

# vi config.toml
baseURL = "http://example.org/"
languageCode = "en-us"
title = "Mainroad"
theme = "Mainroad"

paginate = "10"

[Author] # Used in authorbox
    name = "John Doe"
    bio = "John Doe's true identity is unknown. Maybe he is a successful blogger or writer. Nobody knows it."
    avatar = "img/avatar.png"

[Params]
    subtitle = "Just another site" # Subtitle of your site. Used in site header
    description = " John Doe's Personal blog about everything" # Description of your site. Used in meta description
    opengraph = true # Enable OpenGraph if true
    readmore = false # Show "Read more" button in list if true
    leftsidebar = false # Move sidebar to the left side if true
    authorbox = true # Show authorbox at bottom of pages if true
    post_navigation = true # Show post navigation at bottom of pages if true
    postSections = ["posts"] # the section pages to show on home page and the "Recent articles" widget
    #postSections = ["blog", "news"] # alternative that shows more than one section's pages
    #dateformat = "2006-01-02" # change the format of dates

[Params.widgets]
    search = true # Enable "Search" widget
    recent_articles = true # Enable "Recent articles" widget
    recent_articles_num = 5 # Set the number of articles in the "Recent articles" widget
    categories = true # Enable "Categories" widget
    tags = true # Enable "Tags" widget
    tags_counter = false # Enable counter for each tag in "Tags" widget (disabled by default)

# vi content/posts/my-first-post.md
---
title: "My First Post"
date: 2017-09-18T00:15:12+09:00
draft: false
---

post
===
abc
123

# hugo server -D --bind="0.0.0.0" --baseURL="192.168.0.249"
```

6. Tag and Category

```
# vi content/posts/my-first-post.md
---
title: "My First Post"
date: 2017-09-18T00:15:12+09:00
categories:
- "iot"
tags:
- "aws"
- "iot"
draft: false
---

# hugo server -D --bind="0.0.0.0" --baseURL="192.168.0.249"
```

## Reference

- [layout 生成時に優先されるファイル参照順](http://staff.feedtailor.jp/2016/05/11/hugo_05/)

## インクリメンタルサーチの導入

- [Hugo で javascript を使った全文検索（インクリメンタルサーチ）](https://monoworks.co.jp/post/2018-07-09-hugo-js-full-text-search/)

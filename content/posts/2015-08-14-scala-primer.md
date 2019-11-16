---
title: Scala Primer
slug: scala-primer
tags:
- "scala"
date: 2015-08-14T00:00:00+09:00
draft: false
---

# Scalaのオブジェクト
* シングルトンクラス = Scala のオブジェクト。
* インスタンスのように複数作成はできない。

#コンパイル
```
    scalac HelloWorld.scala
    scala HelloWorld
    
    scalac -d classes HelloWorld.scala
    scala -cp classes HelloWorld
```

# for構文
* ジェネレータを用いる（eachのようなもの？）

```
    for (n:Int <- Range(1,101))
      total += n
```

* for条件にフィルタをかけることができる

```
    for (n:Int <- Range(1,101); if (n % 2 == 0))
      total += n
```


# メソッドと関数
* Java同様にメソッドが存在する

```
    object HelloWorld {
      
      def main(args: Array[String]) = {
        println("Hello World")
      }

      def pritest(s: String) = {
        println(s)
      }
    }
```


* App trait を使うと main メソッドを省略できる
* ただ、よくわからないのが実行方法によって結果が違うこと。
* おそらく mainメソッドの実行方法が違うのだと思うけど詳しく調べられていない。

```
    object HelloWorld extends App {
      println("Hello World")
    }
```

```
    > scala HelloWorld.scala
    実行結果では何も表示されない

    > scalac HelloWorld.scala
    > scala HelloWorld
    printlnの結果が表示される
```

```
    object HelloWorld extends App {
      println("Hello World")
    }
    HelloApp.main(null)
```

```
    > scala HelloWorld.scala
    printlnの結果が表示される
```

* 関数オブジェクト（メソッドの中で関数定義が可能）

```
    object HelloWorld {
    
      def main(args: Array[String]) = {
        println("Hello World")

        val pritest = (s: String) => {
          println(s)
        }
      }
    }
```


* 引数の名前指定

```
    def func (a:Int, b:Int)
    func(b=1, a=2)
```


* メソッドを関数オブジェクトとして取り出す

```
    object HelloWorld {
      def main(args: Array[String]) = {
        val func = pritest _
        func(1)
      }

      def pritest(num: Int) = {
        println(num)
      }
    }
```


# カリー化

```
    object HelloWorld {
      def main(args: Array[String]) = {
        val pritest = preTest(1)
	pritest(10)
      }

      def preTest(min: Int) = (max: Int) => {
        for(n:Int <- Range(min, max + 1))
	  println(n)
      }
    }
```


# Reference
* [Scala Getting Started](http://www.scala-lang.org/documentation/getting-started.html)
* [30分でわかる（かも知れない）Scala超々入門！](http://libro.tuyano.com/index3?id=1047007)

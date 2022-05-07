---
title: Gatsby.jsのブログのトップページだけがなぜか複数回リロードしないと過去の内容で表示される問題
date: "2021-06-11T01:09:00.00Z"
thumbnailPath: "./gatsby.png"
category: プログラミング
tags:
  - Gatsby
  - ServiceWorker
  - S3
  - CloudFront

---

![gatsby](gatsby.png)

ここ数日、ずっとこの問題に悩まされていて調査していた。

## 結論

結論からいうと、原因はServiceWorkerでした。。

## 前提

このomomuro.devは、Gatsby.jsを使って作られている。
そして色々コードを更新したり記事を書いて、デプロイしている。
本番環境は下記です。

### 本番環境
AWS
- Routes53
- S3
- CloudFront

## 問題

ブログをデプロイしたあと、トップページにアクセスしても、最新の情報が表示されなかった。
おかしいなと思い、当初キャッシュがうまく削除できていないのではないかと考え、
CloudFrontを疑ってみたり、S3のキャッシュコントロールを疑ってみたりした。

しかし、色々ためしても解決しない。。
ほとんど同等の環境を新たにつくってみると、そっちはなぜか問題が起きない。

ブラウザの開発ツールからネットワークタブを開いて、差分を見てみると、
問題が起きているほうは、よく見るとServiceWorkerと書いていた。

そういえば、そんなpluginが入っていたし、それをある時オンにした気がした。
ServiceWorkerを導入するプラグインは、gatsby-plugin-offlineである。

これを削除するために、gatsby-plugin-remove-serviceworkerを入れた。

## まとめ

ServiceWorkerをオフると問題は解決しました。

そもそもオフにしなくても、うまいことすればこの問題を解決する方法はあったかもしれない。
しかし、ServiceWorkerをどうしても使いたい理由は特になかったので良しとしました。

ほんとうに色々調査しました。S3、CloudFrontなどに少し詳しくなりました。

## 参考になった記事

https://gg-box.com/2020_12/2020_12_17_sw_delete/

ありがとうございます。


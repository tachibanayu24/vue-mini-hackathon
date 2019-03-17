# vue-hackathon

## 環境構築(ローカル)

1. プロジェクトのディレクトリを作成してコードをクローン(ローカルに複製)してパッケージをインストールしてサーバを起動する

```
$ pwd
  /なんとかなんとか/Desktop  # カレントディレクトリがDesktopであることを確認する。

$ git clone https://github.com/tachibanayu24/vue-mini-hackathon.git

$ cd vue-mini-hackathon

$ npm i

$ npm run serve
```

2. ブラウザで http://localhost:8080 を開く


## デプロイ手順(ここは理解する必要なし)

firebase hostingを利用する。

1. `firebase init`時にはpublicディレクトリはdistを選択。SPAで設定する。

2. `npm run build`でdistにビルドされていく。

3. `firebase deploy`で公開する。
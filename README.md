# websocket-learn1

WebSocket なんもわからんので
[ゆっくり学ぶ WebSocket —— 仕組み、使い方、プロトコル解析まで](https://zenn.dev/mima_ita/articles/1cfc28411a8266)
をやってみました。

## 実行

```sh
pnpm i
pnpm start
```

ブラウザで <http://localhost:3000> を開く。

## 問題点

### DevTools で ws の通信が見えない

なんか UI が変わったらしく、そのソケット選んで messages タブからでないと表示されない。

### 戻りが `[object Blob]` になる

`aaaa` を送ると `送信(text)` でも `送信(binary)` でも戻りはバイナリになる。
⇒ ちょっと改造した

- [websocket\.send\(data\[, options\]\[, callback\]\)](https://github.com/websockets/ws/blob/master/doc/ws.md#websocketsenddata-options-callback) - "Default is autodetected" だそうな。
- [WebSocket: send\(\) メソッド](https://developer.mozilla.org/ja/docs/Web/API/WebSocket/send) - こっちではない

## TODO

`pnpm start` を停止させるのが難しい。
Ctrl+C を 2 回押さないと。
2 個サーバを起動してるからしょうがないんだけど。
"hono で作り直す" 案あり

## WebSocket のメモ

### fan-out

WebSocket 自体には、MQTT みたいな fan-out は無い。
ws サーバを作りこめばできる。MQTT の fan-out はブローカの責務。

### クラウド上のマネージドなwsサーバ

ws サーバはスケーリングが難しいので、node で書いてる場合じゃない。

- [Build a WebSocket server · Cloudflare Durable Objects docs](https://developers.cloudflare.com/durable-objects/examples/websocket-server/) - いま一番人気らしい
- [API Gateway での WebSocket API の概要 \- Amazon API Gateway](https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/apigateway-websocket-api-overview.html)
- [Azure Web PubSub \| Microsoft Azure](https://azure.microsoft.com/en-us/products/web-pubsub/)
- [Ably Pub/Sub: Websocket\-based pub/sub at limitless scale](https://ably.com/pubsub)
- [Realtime \| Sync your data in real time](https://supabase.com/realtime)

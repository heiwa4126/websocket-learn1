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

- [websocket\.send\(data\[, options\]\[, callback\]\)](https://github.com/websockets/ws/blob/master/doc/ws.md#websocketsenddata-options-callback) - `Default is autodetected`
- [WebSocket: send\(\) メソッド](https://developer.mozilla.org/ja/docs/Web/API/WebSocket/send) - こっちではない

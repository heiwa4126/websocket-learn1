import { WebSocketServer } from "ws";

const port = process.env.PORT || 8080;

const wsServer = new WebSocketServer({
	port
});

console.log(`WebSocket server is listening on ws://localhost:${port}`);

wsServer.on("connection", (ws, req) => {
	console.log("connection");
	const ip = req.socket.remoteAddress;
	ws.on("error", console.error);
	ws.on("message", function message(data, isBinary) {
		if (isBinary) {
			console.log(`receive binary [${ip}]:`, data);
			ws.send(data, { binary: true });
		} else {
			const text = data.toString("utf8");
			console.log(`receive text [${ip}]:`, text);
			ws.send(text);
		}
	});
	const interval = setInterval(() => {
		ws.send(`event ${new Date()}`);
	}, 10000);
	ws.on("close", () => {
		console.log("close");
		clearInterval(interval);
	});
	ws.send(`connected ${ip}`);
});

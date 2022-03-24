import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = user => {
	socket = io("http://localhost:5000", {
		auth: {
			token: user?.token,
		},
	});

	socket.on("connect", () => {
		console.log("Client connected to socket");
	});
};

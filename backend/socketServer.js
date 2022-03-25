const verifyTokenSocket = require("./middleware/authSocket");
const { setSocketServerInstance, getOnlineUsers } = require("./serverStore");
const disconnectHanlder = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = server => {
	const io = require("socket.io")(server, {
		cors: {
			origin: "*",
			methods: ["GET", "POST"],
		},
	});

	setSocketServerInstance(io);

	io.use((socket, next) => {
		verifyTokenSocket(socket, next);
	});

	const emitOnlineUsers = () => {
		const onlineUsers = getOnlineUsers();
		io.emit("online-users", { onlineUsers });
	};

	io.on("connection", socket => {
		console.log("Connected to socket");

		newConnectionHandler(socket, io);
		emitOnlineUsers();

		socket.on("disconnect", () => {
			disconnectHanlder(socket);
		});
	});

	setInterval(() => {
		emitOnlineUsers();
	}, 8000);
};

module.exports = {
	registerSocketServer,
};

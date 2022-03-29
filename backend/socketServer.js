const verifyTokenSocket = require("./middleware/authSocket");
const { setSocketServerInstance, getOnlineUsers } = require("./serverStore");
const {
	directChatHistoryHandler,
} = require("./socketHandlers/directChatHistoryHandler");
const directMessageHandler = require("./socketHandlers/directMessageHandler");
const disconnectHanlder = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const roomCreateHanlder = require("./socketHandlers/roomCreateHandler");

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

		socket.on("direct-message", data => {
			directMessageHandler(socket, data);
		});

		socket.on("direct-chat-history", data => {
			directChatHistoryHandler(socket, data);
		});

		socket.on("room-create", () => {
			roomCreateHanlder(socket);
		});

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

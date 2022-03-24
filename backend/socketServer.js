const verifyTokenSocket = require("./middleware/authSocket");
const { removeUser } = require("./serverStore");
const disconnectHanlder = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = server => {
	const io = require("socket.io")(server, {
		cors: {
			origin: "*",
			methods: ["GET", "POST"],
		},
	});

	io.use((socket, next) => {
		verifyTokenSocket(socket, next);
	});

	io.on("connection", socket => {
		console.log("Connected to socket");

		newConnectionHandler(socket, io);

		socket.on("disconnect", () => {
			disconnectHanlder(socket);
		});
	});
};

module.exports = {
	registerSocketServer,
};

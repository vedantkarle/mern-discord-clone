const { getSocketServerInstance } = require("../serverStore");

const roomInitializeConnectionHandler = (socket, data) => {
	const { connUserSocketId } = data;

	const initData = {
		connUserSocketId: socket.id,
	};

	const io = getSocketServerInstance();

	io.to(connUserSocketId).emit("conn-init", initData);
};

module.exports = { roomInitializeConnectionHandler };

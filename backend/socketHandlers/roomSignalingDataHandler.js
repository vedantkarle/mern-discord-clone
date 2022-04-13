const { getSocketServerInstance } = require("../serverStore");

const roomSignalingDataHandler = (socket, data) => {
	const { connUserSocketId, signal } = data;

	const signalingData = { signal, connUserSocketId: socket.id };

	const io = getSocketServerInstance();

	io.to(connUserSocketId).emit("conn-signal", signalingData);
};

module.exports = { roomSignalingDataHandler };

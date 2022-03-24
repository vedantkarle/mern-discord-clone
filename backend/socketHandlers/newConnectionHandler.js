const { addUser } = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
	const user = socket.user;

	addUser({
		socketId: socket.id,
		userId: user,
	});
};

module.exports = newConnectionHandler;

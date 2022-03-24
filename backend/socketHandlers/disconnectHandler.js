const { removeUser } = require("../serverStore");

const disconnectHanlder = socket => {
	removeUser(socket.id);
};

module.exports = disconnectHanlder;

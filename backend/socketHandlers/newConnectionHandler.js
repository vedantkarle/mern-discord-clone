const { addUser } = require("../serverStore");
const {
	updateFriendsPendingInvitations,
	updateFriends,
} = require("../socketHandlers/updates/friends");

const newConnectionHandler = async (socket, io) => {
	const user = socket.user;

	addUser({
		socketId: socket.id,
		userId: user,
	});

	updateFriendsPendingInvitations(user);

	updateFriends(user);
};

module.exports = newConnectionHandler;

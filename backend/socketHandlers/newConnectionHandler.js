const { addUser } = require("../serverStore");
const {
	updateFriendsPendingInvitations,
	updateFriends,
} = require("../socketHandlers/updates/friends");
const updateRooms = require("./updates/rooms");

const newConnectionHandler = async (socket, io) => {
	const user = socket.user;

	addUser({
		socketId: socket.id,
		userId: user,
	});

	updateFriendsPendingInvitations(user);

	updateFriends(user);

	setTimeout(() => {
		updateRooms(socket.id);
	}, 500);
};

module.exports = newConnectionHandler;

const { removeUser, getActiveRooms } = require("../serverStore");
const leaveRoomHandler = require("./leaveRoomHandler");

const disconnectHanlder = socket => {
	const activeRooms = getActiveRooms();

	activeRooms.forEach(activeRoom => {
		const isUserInRoom = activeRoom.participants.some(
			participant => participant.socketId === socket.id,
		);

		if (isUserInRoom) {
			leaveRoomHandler(socket, { roomId: activeRoom.roomId });
		}
	});

	removeUser(socket.id);

	console.log("User disconnected");
};

module.exports = disconnectHanlder;

const { getActiveRoom, joinActiveRoom } = require("../serverStore");
const updateRooms = require("./updates/rooms");

const roomJoinHandler = (socket, data) => {
	const { roomId } = data;

	const participantDetails = {
		userId: socket.user,
		socketId: socket.id,
	};

	joinActiveRoom(roomId, participantDetails);

	updateRooms();
};

module.exports = roomJoinHandler;

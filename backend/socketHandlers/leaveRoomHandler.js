const {
	getActiveRoom,
	leaveActiveRoom,
	getSocketServerInstance,
} = require("../serverStore");
const updateRooms = require("./updates/rooms");

const leaveRoomHandler = (socket, data) => {
	const { roomId } = data;

	const activeRoom = getActiveRoom(roomId);
	const io = getSocketServerInstance();

	if (activeRoom) {
		leaveActiveRoom(roomId, socket.id);

		const updatedActiveRoom = getActiveRoom(roomId);

		if (updatedActiveRoom) {
			updatedActiveRoom.participants.forEach(participant => {
				io.to(participant.socketId).emit("room-participant-left", {
					connUserSocketId: socket.id,
				});
			});
		}

		updateRooms();
	}
};

module.exports = leaveRoomHandler;

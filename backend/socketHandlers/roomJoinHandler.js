const {
	getActiveRoom,
	joinActiveRoom,
	getSocketServerInstance,
} = require("../serverStore");
const updateRooms = require("./updates/rooms");

const roomJoinHandler = (socket, data) => {
	const { roomId } = data;

	const participantDetails = {
		userId: socket.user,
		socketId: socket.id,
	};

	const io = getSocketServerInstance();

	const roomDetails = getActiveRoom(roomId);

	joinActiveRoom(roomId, participantDetails);

	roomDetails.participants.forEach(participant => {
		if (participant.socketId !== participantDetails.socketId) {
			io.to(participant.socketId).emit("conn-prepare", {
				connUserSocketId: participantDetails.socketId,
			});
		}
	});

	updateRooms();
};

module.exports = roomJoinHandler;

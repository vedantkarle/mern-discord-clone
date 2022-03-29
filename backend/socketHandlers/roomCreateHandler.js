const { addNewActiveRoom } = require("../serverStore");
const updateRooms = require("./updates/rooms");

const roomCreateHanlder = socket => {
	const socketId = socket.id;
	const userId = socket.user;

	const roomDetails = addNewActiveRoom(userId, socketId);

	socket.emit("room-create", {
		roomDetails,
	});

	updateRooms();
};

module.exports = roomCreateHanlder;

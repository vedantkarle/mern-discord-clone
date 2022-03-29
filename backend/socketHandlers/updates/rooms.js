const {
	getSocketServerInstance,
	getActiveRooms,
} = require("../../serverStore");

const updateRooms = (toSpecificSocketId = null) => {
	const io = getSocketServerInstance();
	const activeRooms = getActiveRooms();

	if (toSpecificSocketId) {
		io.to(toSpecificSocketId).emit("active-rooms", {
			activeRooms,
		});
	} else {
		io.emit("active-rooms", activeRooms);
	}
};

module.exports = updateRooms;

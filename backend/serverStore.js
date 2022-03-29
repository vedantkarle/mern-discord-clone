const { v4: uuidv4 } = require("uuid");

const users = [];
let activeRooms = [];

let io = null;

const setSocketServerInstance = ioInstance => {
	io = ioInstance;
};

const getSocketServerInstance = () => io;

const addUser = ({ socketId, userId }) => {
	const user = users.find(user => user.userId === userId);

	if (user && user.socketId !== socketId) {
		removeUser(user.socketId);
	}

	const newUser = { userId, socketId };

	users.push(newUser);

	console.log(users);
};

const removeUser = socketId => {
	const indexOf = users.map(user => user.socketId).indexOf(socketId);

	users.splice(indexOf, 1);
};

const getActiveConnections = userId => {
	const activeConnections = [];
	users.forEach(user => {
		if (user.userId === userId) {
			activeConnections.push(user.socketId);
		}
	});

	return activeConnections;
};

const getOnlineUsers = () => {
	const onlineUsers = [];
	users.forEach(user => onlineUsers.push(user));

	return onlineUsers;
};

const addNewActiveRoom = (userId, socketId) => {
	const newActiveRoom = {
		roomCreator: { userId, socketId },
		participants: [
			{
				userId,
				socketId,
			},
		],
		roomId: uuidv4(),
	};

	activeRooms.push(newActiveRoom);

	return newActiveRoom;
};

const getActiveRooms = () => {
	return activeRooms;
};

const getActiveRoom = roomId => {
	return activeRooms.find(room => room.roomId === roomId);
};

const joinActiveRoom = (roomId, newParticipant) => {
	const room = activeRooms.find(room => room.roomId === roomId);
	activeRooms = activeRooms.filter(room => room.roomId !== roomId);

	const updatedRoom = {
		...room,
		participants: [...room.participants, newParticipant],
	};

	activeRooms.push(updatedRoom);
};

const leaveActiveRoom = (roomId, socketId) => {
	const room = activeRooms.find(room => room.roomId === roomId);
	activeRooms = activeRooms.filter(room => room.roomId !== roomId);

	const updatedRoom = {
		...room,
		participants: room.participants.filter(
			participant => participant.socketId !== socketId,
		),
	};

	if (updatedRoom.participants.length > 0) {
		activeRooms.push(updatedRoom);
	}
};

module.exports = {
	addUser,
	removeUser,
	getActiveConnections,
	getSocketServerInstance,
	setSocketServerInstance,
	getOnlineUsers,
	addNewActiveRoom,
	getActiveRooms,
	getActiveRoom,
	joinActiveRoom,
	leaveActiveRoom,
};

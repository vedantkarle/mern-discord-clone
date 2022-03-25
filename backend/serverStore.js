const users = [];

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

	// console.log(users);

	return;
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

module.exports = {
	addUser,
	removeUser,
	getActiveConnections,
	getSocketServerInstance,
	setSocketServerInstance,
};

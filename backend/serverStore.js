const users = [];

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

module.exports = {
	addUser,
	removeUser,
};

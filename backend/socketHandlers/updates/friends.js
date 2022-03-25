const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");
const {
	getActiveConnections,
	getSocketServerInstance,
} = require("../../serverStore");

const updateFriendsPendingInvitations = async userId => {
	try {
		const pendingInvitations = await FriendInvitation.find({
			receiverId: userId,
		}).populate("senderId", "_id username email");

		const receiverList = getActiveConnections(userId);

		const io = getSocketServerInstance();

		//to update realtime on all the devices the user is logged in from
		receiverList.forEach(receiverSocketId => {
			io.to(receiverSocketId).emit("friends-invitations", {
				pendingInvitations: pendingInvitations || [],
			});
		});
	} catch (error) {
		console.error(error);
	}
};

const updateFriends = async userId => {
	try {
		const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
			"friends",
			"_id username email",
		);

		if (user) {
			const friends = user.friends.map(f => ({
				id: f._id,
				email: f.email,
				username: f.username,
			}));

			const receiverList = getActiveConnections(userId);

			const io = getSocketServerInstance();

			//to update realtime on all the devices the user is logged in from
			receiverList.forEach(receiverSocketId => {
				io.to(receiverSocketId).emit("friends-list", {
					friends: friends || [],
				});
			});
		}
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	updateFriendsPendingInvitations,
	updateFriends,
};

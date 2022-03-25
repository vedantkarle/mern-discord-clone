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

module.exports = {
	updateFriendsPendingInvitations,
};

const User = require("../models/User");
const FriendInvitation = require("../models/FriendInvitation");
const {
	updateFriendsPendingInvitations,
	updateFriends,
} = require("../socketHandlers/updates/friends");

exports.friendInvitation = async (req, res) => {
	try {
		const { email } = req.body;

		const { userId } = req.user;

		if (email.toLowerCase() === req.user.email.toLowerCase()) {
			return res.status(409).send("You cannot send invitation to yourself!");
		}

		const targetUser = await User.findOne({ email: email.toLowerCase() });

		if (!targetUser) {
			return res.status(404).send("No user with that email address found!");
		}

		const alreadyInvited = await FriendInvitation.findOne({
			senderId: userId,
			receiverId: targetUser._id,
		});

		if (alreadyInvited) {
			return res.status(409).send("Invitation has already been sent");
		}

		const userAlreadyFriend = targetUser.friends.find(
			f => f.toString() === userId.toString(),
		);

		if (userAlreadyFriend) {
			return res.status(409).send("User is already a friend");
		}

		await FriendInvitation.create({
			senderId: userId,
			receiverId: targetUser._id,
		});

		updateFriendsPendingInvitations(targetUser._id.toString());

		res.sendStatus(204);
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};

exports.acceptInvitation = async (req, res) => {
	const { id } = req.body;

	try {
		const invitation = await FriendInvitation.findById(id);

		if (!invitation) {
			return res.status(404).send("No invitation found!");
		}

		const { senderId, receiverId } = invitation;

		await User.findByIdAndUpdate(senderId, { $push: { friends: receiverId } });

		await User.findByIdAndUpdate(receiverId, { $push: { friends: senderId } });

		await FriendInvitation.findByIdAndDelete(id);

		updateFriendsPendingInvitations(receiverId.toString());

		updateFriends(receiverId.toString());

		res.status(200).send("Invitation accepted");
	} catch (error) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};

exports.rejectInvitation = async (req, res) => {
	const { id } = req.body;
	const { userId } = req.user;
	try {
		const invitationExists = await FriendInvitation.exists({ _id: id });

		if (invitationExists) {
			await FriendInvitation.findByIdAndDelete(id);
		}

		updateFriendsPendingInvitations(userId);

		res.status(200).send("Invitation rejected");
	} catch (error) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
};

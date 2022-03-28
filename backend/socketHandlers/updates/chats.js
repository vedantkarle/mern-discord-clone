const Conversation = require("../../models/conversation");
const {
	getSocketServerInstance,
	getActiveConnections,
} = require("../../serverStore");

const updateChatHistory = async (conversationId, toSpecificSocketId = null) => {
	const conversation = await Conversation.findById(conversationId).populate({
		path: "messages",
		model: "Message",
		populate: {
			path: "author",
			model: "User",
			select: "username _id",
		},
	});

	if (conversation) {
		const io = getSocketServerInstance();

		if (toSpecificSocketId) {
			return io.to(toSpecificSocketId).emit("direct-chat-history", {
				messages: conversation.messages,
				participants: conversation.participants,
			});
		}

		conversation.participants.forEach(participant => {
			const activeConnections = getActiveConnections(participant.toString());

			activeConnections.forEach(socketId => {
				io.to(socketId).emit("direct-chat-history", {
					messages: conversation.messages,
					participants: conversation.participants,
				});
			});
		});
	}
};

module.exports = { updateChatHistory };

const Conversation = require("../models/conversation");
const { updateChatHistory } = require("./updates/chats");

const directChatHistoryHandler = async (socket, data) => {
	try {
		const { user } = socket;
		const { receiverId } = data;

		const conversation = await Conversation.findOne({
			participants: {
				$all: [user, receiverId],
			},
			type: "Direct",
		});

		if (conversation) {
			updateChatHistory(conversation._id.toString(), socket.id);
		}
	} catch (error) {
		console.error(error);
	}
};

module.exports = { directChatHistoryHandler };

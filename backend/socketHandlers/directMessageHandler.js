const Conversation = require("../models/conversation");
const Message = require("../models/message");
const { updateChatHistory } = require("./updates/chats");

const directMessageHandler = async (socket, data) => {
	try {
		const { user } = socket;
		const { receiverId, content } = data;

		const message = await Message.create({
			content,
			author: user,
			date: new Date(),
			type: "Direct",
		});

		const conversation = await Conversation.findOne({
			participants: {
				$all: [user, receiverId],
			},
		});

		if (conversation) {
			conversation.messages.push(message);
			await conversation.save();

			updateChatHistory(conversation._id.toString());
		} else {
			const newConversation = await Conversation.create({
				messages: [message._id],
				participants: [user, receiverId],
			});

			updateChatHistory(newConversation._id.toString());
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = directMessageHandler;

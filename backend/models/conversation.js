const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
	],
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;

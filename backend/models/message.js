const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	content: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
	},
	type: {
		type: String,
		enum: ["Direct", "Group"],
	},
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

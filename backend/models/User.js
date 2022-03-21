const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
	},
	{ timestamps: true },
);

userSchema.pre("save", async function (next) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(this.password, salt);
		this.password = hashedPassword;
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.isValidPassword = async function (password) {
	try {
		return await bcrypt.compare(password, this.password);
	} catch (error) {
		throw error;
	}
};

const User = mongoose.model("User", userSchema);

module.exports = User;

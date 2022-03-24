const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const user = await User.findOne({ email });

		if (user) {
			return res.status(409).send("E-mail already registered!");
		}

		const newUser = await User.create({
			username,
			email: email.toLowerCase(),
			password,
		});

		const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.status(200).json({
			user: {
				email: newUser.email,
				username: newUser.username,
				token,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).send("No user with that email");
		}

		const isMatch = await user.isValidPassword(password);

		if (!isMatch) {
			return res.status(401).send("Invalid Credentials");
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: "15s",
		});

		res.status(200).json({
			user: {
				email: user.email,
				username: user.username,
				token,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

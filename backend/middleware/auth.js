const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
	const token = req.headers["authorization"];
	if (!token) return res.status(401).send("Unauthorized!");
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { userId: decoded.userId, email: decoded.email };
	} catch (error) {
		return res.status(401).send("Unauthorized!");
	}
	next();
};

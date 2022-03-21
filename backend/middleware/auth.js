const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
	const token = req.headers["authorization"];
	if (!token) return res.status(401).send("Unauthorized!");
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.userId;
	} catch (error) {
		return res.status(401).send("Unauthorized!");
	}
	next();
};

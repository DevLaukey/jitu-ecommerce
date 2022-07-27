const jwt = require("jsonwebtoken");
exports.isAuthenticated = (req, res, next) => {
	const token = req.header("Authorization");
	if (!token) {
		console.log("Access denied, no token provided");
		return res.status(401).json({
			status: 401,
			success: false,
			Error: "Access denied, no token provided",
		});
	}
	try {
		const { decoded, exp } = jwt.verify(token, "secret");
		if (exp < Date.now().valueOf() / 1000) {
			return res.status(401).json({
				status: 401,
				success: false,
				Error: "token has expired, please login",
			});
		}
		if (!decoded) {
			return res.status(101).json({
				status: 401,
				success: false,
				Error: "Access denied, the token is inavlid",
			});
		}
		req.body = user;
		next();
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			status: 500,
			success: false,
			Error: error.message,
		});
	}
};

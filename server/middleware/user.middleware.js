const user = require('../models/users.model');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
	try {
		let token, currentUser;
		console.log(req.cookies);
		if (req.cookies.jwt) {
			token = req.cookies.jwt;
			const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
			currentUser = await user.findOne({ _id: verifyToken._id });
		}

		console.log("MiddleWare");
		req.user = currentUser;

		next();
	}
	catch (err) {
		console.log(err);
		return res.status(500).send(err);
	}
}

module.exports = authenticate;
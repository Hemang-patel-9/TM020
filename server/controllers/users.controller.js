const FAQ = require('../models/faqs.model');
const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

async function addUser(req, res, next) {
	const body = req.body;
	if (body.name && body.email && body.password) {
		const userExist = await User.findOne({ email: req.body.email });

		if (userExist) {
			return res.status(400).json({ error: 'User already exists' });
		}

		try {
			const user = await User.create(req.body);
			res.status(200).json(user);
		}
		catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
	else {
		res.status(400).json({ message: "Fill the missing Parameters." });
	}
}

const signin = async (req, res, next) => {
	const body = req.body;
	if (body.email && body.password) {
		try {
			const user = await User.findOne({ email: body.email });

			if (!user) {
				return res.status(400).send({ message: 'User Not Found!' });
			}

			const isMatch = await bcrypt.compare(body.password, user.password);

			if (!isMatch) {
				return res.status(400).send({ message: 'Invalid details!' });
			}

			res.status(200).json(user);
		}
		catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
	else {
		res.status(400).json({ message: "Please Enter Email and Password" });
	}
}
const deleteUser = async (req, res, next) => {
	if (req.params.id) {
		try {
			const existUser = await User.findOne({ _id: req.params.id });

			if (!existUser) {
				return res.status(400).json({ error: "User doesn't exists" });
			}

			await existUser.deleteOne();
			res.status(200).json({ message: "User deleted" });
		}
		catch (err) {
			res.status(520).json({ message: err.message });
		}
	}
	else {
		res.status(400).json({ message: "Please Enter Email and Password" });
	}
}

module.exports = {
	addUser,
	signin,
	deleteUser,
}



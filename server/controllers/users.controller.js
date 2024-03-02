const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const addUser = async (req, res, next) => {
	const body = req.body;
	console.log(body);
	if (body.email && body.password) {
		const userExist = await User.findOne({ email: req.body.email });

		if (userExist) {
			return res.status(400).json({ error: 'User already exists' });
		}

		try {
			const user = await User.create({ email: body.email, password: body.password });


			let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
			user.tokens = user.tokens.concat({ token: token });

			res.cookie('jwt', token, {
				maxAge: 15 * 60 * 1000,
				http: true
			});
			await user.save();

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

			let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
			user.tokens = user.tokens.concat({ token: token });

			await user.save();

			res.cookie('jwt', token, {
				maxAge: 15 * 60 * 1000,
				http: true,
				secure: true
			});

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
const extraData = async (req, res, next) => {
	console.log(req.body);
	try {
		console.log(req.params.emailid);
		let currentUser = await User.findOne({ email: req.params.emailid });

		console.log(currentUser);

		currentUser.name = req.body.userName;
		console.log(currentUser.name);
		currentUser.profession = req.body.selectedOption.text;
		console.log(currentUser.profession);
		console.log("frontend");
		currentUser.interest.frontend = req.body.frontendData;
		console.log(currentUser.interest.frontend);
		console.log("bacend");
		currentUser.interest.backend = req.body.backendData;
		console.log(currentUser.interest.backend);
		console.log("database");
		currentUser.interest.database = req.body.databaseData;
		console.log(currentUser.interest.database);
		console.log("other");
		currentUser.interest.other = req.body.optionData;
		console.log(currentUser.interest.other);

		console.log(currentUser);
		console.log("finally");
		await currentUser.save();

		res.status(200).json({ message: "User updated" });;
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}
module.exports = {
	addUser,
	signin,
	deleteUser,
	extraData
}



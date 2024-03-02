const jwt = require('jsonwebtoken');
const user = require('../models/users.model');

const authenticate = async(req,res,next)=>{
	try{
		let token;

		if(req.cookies.jwt){
			token = req.cookies.jwt;
		}

		const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
		const currentUser = await user.findOne({_id:verifyToken._id});

		console.log("MiddleWare");
		console.log(currentUser);
		
		req.user = currentUser;

		next();
	}
	catch(err)
	{
		console.log(err);
		return res.status(500).send(err);
	}
}
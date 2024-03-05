const mongoose = require("mongoose");

async function connectMongodb()
{
	return mongoose.connect(process.env.DATABASE).then(() => { console.log("MongoDB Database Connected Successfully!"); });
}

module.exports = {
	connectMongodb
}
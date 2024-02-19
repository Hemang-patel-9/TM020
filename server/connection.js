const mongoose = require("mongoose");

async function connectMongodb()
{
	return mongoose.connect("mongodb+srv://hemangpatel:admin%40project.com@personalcluster.r831tea.mongodb.net/student_hub").then(() => { console.log("MongoDB Database Connected Successfully!"); });
}

module.exports = {
	connectMongodb
}
const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
	question:
	{
		type:String,
		required:true
	},
	answer:
	{
		type: String,
		required: true
	},
});

const globalSchema = mongoose.Schema({
	name:
	{
		type: String,
		required: true
	},
	problem:{
		type:String,
		required:true
	},
	input:{
		type: String,
		required: true
	},
	output: {
		type: String,
		required: true
	},
	example:
	{
		type:mySchema,
		require:true
	}
});

const Quiz = mongoose.model("quizes",globalSchema);

module.exports = Quiz;
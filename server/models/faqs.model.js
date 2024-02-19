const mongoose = require("mongoose");

const FAQsSchema = mongoose.Schema({
	question:{
		type:String,
		required:true
	},
	answer:
	{
		type:String,
		required:true
	}
});
const FAQ = mongoose.model("FAQs",FAQsSchema);
module.exports = FAQ;
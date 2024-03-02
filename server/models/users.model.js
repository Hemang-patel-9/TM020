const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

//quize object
const quizSchema = mongoose.Schema({
	quizeId:
	{
		type: mongoose.Schema.Types.ObjectId
	},
	quizeResult:
	{
		type: Number,
		default: 0
	}
});

//course object
const courseSchema = mongoose.Schema({
	courseId:
	{
		type: mongoose.Schema.Types.ObjectId
	},
	courseName:
	{
		type: String
	},
	courseDone:
	{
		type: Number
	},
	paid:
	{
		type: Boolean,
		default: false
	},
	favorite:
	{
		type: Boolean,
		default: false
	}
});
const interestSchema = mongoose.Schema({
	frontend:{
		type:[String]
	},
	backend:{
		type:[String]
	},
	database:{
		type:[String]
	},
	other:{
		type:[String]
	}

});

const userSchema = mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minLength: 8
	},
	image:
	{
		data: Buffer,
		contentType: String,
	},
	contactNumber:
	{
		type: Number,
	},
	interest:
	{
		type: { interestSchema }
	},
	profession:
	{
		type: String
	},
	techTokens:
	{
		type: Number,
		default: 0
	},
	friends:
	{
		type: [{ type: String }]
	},
	communityList:
	{
		type: [{ type: mongoose.Schema.Types.ObjectId }]
	},
	streak:
	{
		type: String
	},
	courseDone:
	{
		type: [{ type: String }]
	},
	certificates:
	{
		type: [{ data: Buffer, contentType: String }]
	},
	quizeResult: [quizSchema],
	courses: [courseSchema],
	tokens: [{
		token: {
			type: String
		}
	}]
});

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
})

const User = mongoose.model("users", userSchema);
module.exports = User;
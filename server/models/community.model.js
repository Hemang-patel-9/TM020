const mongoose = require("mongoose");

const chatsSchema = mongoose.Schema({
	userId:
	{
		type:mongoose.Schema.Types.ObjectId,
		require:true
	},
	message:
	{
		type:String,
		require:true,
		maxLength:200
	}
});

const communitySchema = mongoose.Schema({
	communityName:
	{
		type:String
	},
	topics:{
		type:[{String}]
	},
	members:[{
		memberId:
		{
			type: mongoose.Schema.Types.ObjectId
		},
	}],
	admins:[{
		adminId:{
			type:mongoose.Schema.Types.ObjectId
		}
	}],
	material:[{
		
	}],
	chats:[chatsSchema]


});
//community schema

/**
 * name:String,
 * topics:array of string
 * members::array of string [emails]
 * admins:array of string [emails]
 * material:[files]
 * chats:[external schemas]
 */
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

const Community = mongoose.model("communities",communitySchema);

module.exports = Community;
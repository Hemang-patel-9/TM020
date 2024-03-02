const Community = require("../models/community.model");

const getAllComm = async(req,res,next)=>{
	try
	{
		
	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
}
const deleteComm = async(req,res,next)=>{
	try
	{

	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
}
const addComm = async(req,res,next)=>{
	try
	{

	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
}
const updateComm = async(req,res,next)=>{
	try
	{

	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
}
const getByIdComm = async(req,res,next)=>{
	try
	{

	}
	catch(err)
	{
		res.status(500).json({message:err.message});
	}
}

module.exports = { getAllComm, deleteComm, addComm, updateComm, getByIdComm }
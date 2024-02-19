const FAQ = require("../models/faqs.model");

const getAll = async (req, res, next) => {
	try {
		const data = await FAQ.find({});
		res.status(200).json(data);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}
const addFAQ = async (req, res, next) => {
	if (req.body.question && req.body.answer) {
		try {
			const addedFAQ = await FAQ.create(req.body);
			res.status(200).json(addedFAQ);
		}
		catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
	else {
		res.status(400).json({ message: "Please fill the valid information!" });
	}
}
const updateFAQ = async (req, res,next) => {
	if(!req.params.id)
	{
		return res.status(400).json({message:"Id must be require to update FAQs"});
	}
	try {
		const faq = await FAQ.findByIdAndUpdate(req.params.id, req.body);

		if (!faq) {
			return res.status(400).json({ message: `cannot find the FAQ on ${req.params.id}` });
		}
		const updatedFAQ = await FAQ.findById(req.params.id);
		res.status(200).json(updatedFAQ);
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}
const deleteFAQ = async (req, res, next) => {
	if(!req.params.id)
	{
		return res.status(400).json()
	}
	try {
		const faq = FAQ.find({ _id: req.params.id });
		if (!faq) {
			return res.status(400).json({ message: "No Question Found!" });
		}
		const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: deletedFAQ });
	}
	catch (err) {
		res.status(500).json({ message: err.message });
	}
}

module.exports = { getAll, addFAQ, deleteFAQ, updateFAQ };
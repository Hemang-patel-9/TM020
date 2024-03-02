const Quiz = require('../models/globalQuiz.model')

const addQuiz = async (req, res) => {
    const body = req.body;
    if (body.problem && body.input && body.output && body.example) {
        try {
            const quiz = await Quiz.create(req.body);
            res.status(200).json(quiz);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    else {
        res.status(400).json({ message: "Fill the missing Parameters." });
    }
}
const getByIDQuiz = async (req, res) => {
    id = req.params.id;
    try {
        const question = await Quiz.findOne({ _id: id });
        if (!question) {
			return res.status(400).json({ error: "Quiz doesn't exists" });
        }
        return res.status(200).json(question);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const deleteQuiz = async (req, res) => {
    if (req.params.id) {
        try {
            const quizToDelete = await Quiz.findOne({ _id: req.params.id });

            if (!quizToDelete) {
                return res.status(400).json({ error: "Quiz doesn't exists" });
            }

            await quizToDelete.deleteOne();
            res.status(200).json({ message: "Quiz deleted" });
        }
        catch (err) {
            res.status(520).json({ message: err.message });
        }
    }
    else {
        res.status(400).json({ message: "Please Enter Email and Password" });
    }
}
module.exports = { addQuiz, deleteQuiz, getByIDQuiz };
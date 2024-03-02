const express = require("express");
const router = express.Router();
const { getByIDQuiz,deleteQuiz, addQuiz} = require("../controllers/globalQuiz.controller");
router.get("/:id", getByIDQuiz);
router.post("/", addQuiz);
router.delete("/:id", deleteQuiz);

module.exports = router;
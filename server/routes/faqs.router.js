const express = require("express");
const router = express.Router();
const { getAll, deleteFAQ, addFAQ, updateFAQ } = require("../controllers/faqs.controller");
router.get("/", getAll);
router.put("/:id",updateFAQ);
router.post("/", addFAQ);
router.delete("/:id", deleteFAQ);

module.exports = router;
const express = require("express");
const router = express.Router();
const { getAllComm, deleteComm, addComm, updateComm, getByIdComm } = require("../controllers/community.controller");
router.get("/", getAllComm);
router.get("/:id", getByIdComm);
router.put("/:id", updateComm);
router.post("/", addComm);
router.delete("/:id", deleteComm);

module.exports = router;
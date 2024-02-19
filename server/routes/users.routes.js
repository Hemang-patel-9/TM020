const express = require("express");
const router = express.Router();
const { addUser, signin, deleteUser } = require("../controllers/users.controller");

router.post("/signin",signin);
router.post("/",addUser);
router.delete("/:id",deleteUser);

module.exports = router;
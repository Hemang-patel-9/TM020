const express = require("express");
const router = express.Router();
const User = require('../models/users.model');
const authenticate = require('../middleware/user.middleware')
const { addUser, signin, deleteUser, extraData, getOneUser, addCourse,vcall } = require("../controllers/users.controller");

router.post("/signin", signin);
router.post("/", addUser);
router.delete("/:id", deleteUser);

router.patch('/:emailid', extraData);
router.get('/:emailid', getOneUser);

router.patch('/addcourse/:emailid', addCourse);

router.get('/videocall',vcall);

module.exports = router;
const express = require("express");
const router = express.Router();
const User = require('../models/users.model');
const  authenticate  = require('../middleware/user.middleware')
const { addUser, signin, deleteUser, extraData } = require("../controllers/users.controller");

router.post("/signin", signin);
router.post("/", addUser);
router.delete("/:id", deleteUser);

router.patch('/addExtraData', authenticate, async (req, res) => {
    try {
        const currentUser = await User.findOne({ _id: req.user._id });

        currentUser.profession = req.body.selectedOption.text;
        currentUser.interest.frontend = req.body.frontendData;
        currentUser.interest.backend = req.body.backendData;
        currentUser.interest.database = req.body.databaseData;
        currentUser.interest.other = req.body.optionData;

        await currentUser.save();

        return res.status(200).json({ message: "User updated" });;
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
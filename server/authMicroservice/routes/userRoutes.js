const express = require("express");
const router = express.Router();

const { signup, signin, updateUser, getusers, makeAdmin } = require("../controllers/userController");

router.get("/users", getusers);
router.post("/signup", signup);
router.post("/admin", makeAdmin);

router.post("/signin", signin);
router.post("/update", updateUser);

module.exports = router;

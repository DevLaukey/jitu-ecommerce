const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddleware");

const { signup, signin, updateUser, getusers, makeAdmin } = require("../controllers/userController");

router.get("/users", getusers);
router.post("/signup", signup);
router.post("/admin", makeAdmin);

router.post("/signin", signin);
router.post("/update", isAuthenticated, updateUser);

module.exports = router;

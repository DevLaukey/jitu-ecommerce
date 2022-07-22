const express = require("express");
const router = express.Router();

const { getOrders, createOrder } = require("../controllers/orderController");
const userAuth = require("../../middlewares/authMiddleware");

router.get("/orders", userAuth.isAuthenticated, getOrders);
router.post("/add-order", userAuth.isAuthenticated, createOrder);

module.exports = router;

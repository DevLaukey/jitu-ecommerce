const express = require("express");
const { isAuthenticated } = require("../../authMicroservice/middlewares/authMiddleware");
const router = express.Router();

const { getOrders, createOrder } = require("../controllers/orderController");

router.get("/orders", getOrders);
router.post("/add-order", createOrder);

module.exports = router;

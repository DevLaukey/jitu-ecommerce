const express = require("express");
const router = express.Router();

const { getOrders, createOrder } = require("../controllers/orderController");

router.get("/orders", getOrders);
router.post("/add-order", createOrder);

module.exports = router;

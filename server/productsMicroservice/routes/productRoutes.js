const express = require("express");
const router = express.Router();

const { allCategories, addCategory, updateCategory } = require("../controllers/categoryController");
const { allProducts, addProducts, updateProducts } = require("../controllers/productController");

router.get("/products", allProducts);
router.post("/add-product", addProducts);
router.post("/edit-product", updateProducts);

router.get("/categories", allCategories);
router.post("/add-category", addCategory);
router.post("/edit-category", updateCategory);

module.exports = router;

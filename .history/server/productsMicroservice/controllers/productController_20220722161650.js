const { exec } = require("../../authMicroservice/helpers/db");

module.exports = {
  allProducts: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const size = req.query.size || 10;
      const search = req.query.search || "";

      const result = await exec("product_pagination", { page, size, search });
      const count = result.recordsets[1][0];

      return res.status(201).json({
        status: 201,
        success: true,
        size: size,
        records: result.recordsets[0],
        filtered: count.Filtered,
        total: count.Total,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        status: 500,
        success: false,
        message: error,
      });
    }
  },
  addProducts: async function (req, res) {
    const { imageUrl, productName, price, description, categoryId } = req.body;
    try {
      const product = await exec("add_products", {
        imageUrl,
        productName,
        price,
        description,
        categoryId,
      });

      if (product) {
        return res.status(201).json({
          status: 201,
          success: true,
          message: "Success, product added",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 500,
        success: false,
        message: err.message,
      });
    }
  },
  updateProducts: async function (req, res) {
    const { imageUrl, productName, price, description, categoryId } = req.body;
    try {
      const product = await exec("update_product", {
        imageUrl,
        productName,
        price,
        description,
        categoryId,
      });

      if (product) {
        return res.status(201).json({
          status: 201,
          success: true,
          message: "Success, product updated",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 500,
        success: false,
        message: err.message,
      });
    }
  },
};

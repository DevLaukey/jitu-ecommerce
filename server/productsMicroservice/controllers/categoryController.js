const { exec } = require("../../authMicroservice/helpers/db");

module.exports = {
	allCategories: async (req, res) => {
		await exec("all_categories")
			.then((result) =>
				result.recordset.length
					? res.status(200).json({
							status: 201,
							success: true,
							message: "Success",
							categories: result.recordset,
					  })
					: res.status(404).json({
							status: 405,
							success: false,
							message: "No categories Found",
					  })
			)
			.catch((err) => {
				return res.status(401).json({
					status: 401,
					success: false,
					message: err.message,
				});
			});
	},
	addCategory: async function (req, res) {
		const { categoryName } = req.body;
		try {
			const cat_exists = await exec("verify_category", {
				categoryName,
			});

			if (cat_exists.recordset.length > 0) {
				return res.status(401).json({
					status: 201,
					success: true,
					message: "Failed, category already exists",
				});
			} else {
				await exec("add_category", {
					categoryName,
				});
				return res.status(201).json({
					status: 201,
					success: true,
					message: "Success, category added",
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
	updateCategory: async function (req, res) {
		const { categoryName, categoryId } = req.body;
		try {
			const category = await exec("update_category", {
				categoryId,
				categoryName,
			});

			if (category) {
				return res.status(201).json({
					status: 201,
					success: true,
					message: "Success, category updated",
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

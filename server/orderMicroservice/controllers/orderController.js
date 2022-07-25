const { exec } = require("../../authMicroservice/helpers/db");

module.exports = {
	getOrders: async (req, res) => {
		try {
			const users = await exec("all_orders");
			return res.status(201).json({
				status: 201,
				success: true,
				message: `all orders retrieved`,
				data: users.recordset,
			});
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({
				status: 500,
				success: false,
				message: error.message,
			});
		}
	},

	createOrder: async (req, res) => {
		const { userId } = req.query;
		const { orderId, OrderDetail } = req.body;
		console.log(orderId);
		try {
			const insOrder = await exec("create_order", {
				userId,
			});
			if (insOrder) {
				// const orderId = await exec("latest_order");

				const orderDetail = await exec("createorder", { OrderDetail });
				if (orderDetail) {
					return res.status(201).json({
						status: 201,
						success: true,
						message: "Success, order created",
					});
				}
			}
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				status: 500,
				success: false,
				message: error.message,
			});
		}
	},
	updateOrder: async (req, res) => {
		const { userId, orderId, products } = req.body;

		try {
			const orderExists = await exec("verify_order", {
				orderId,
			});

			if (orderExists.recordset.length == 0) {
				return res.status(401).json({
					status: 401,
					success: false,
					message: `Order does not exist`,
				});
			}
			const order = orderExists.recordset[0];

			const _qty = products.quantity || order.quantity;
			const _price = products.price || order.price;
			const _total = products.total || order.total;

			await exec("update_order", {
				userId,
				orderId,
				price: _price,
				qunatity: _qty,
			});

			return res.status(201).json({
				status: 201,
				success: true,
				message: `order details updated successfully`,
			});
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				status: 500,
				success: false,
				message: error.message,
			});
		}
	},
};

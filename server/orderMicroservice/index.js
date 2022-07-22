const express = require("express");
require("dotenv").config();
const app = express();

const router = require("./routes/orderRoutes");

app.use("/", router);

app.get("/", (req, res) => {
	return res.json({
		message: "Order service here",
	});
});
const PORT = process.env.PORT || 5016;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));

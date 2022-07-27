const express = require("express");
const router = require("./routes/productRoutes");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	res.json({
		status: err.status,
		success: false,
		message: err.message,
	});
});

app.listen(port, () => {
	console.log(`products microserveice running port: ${port}`);
});

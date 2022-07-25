const express = require("express");
require("dotenv").config();
const router = require("./routes/userRoutes");
const cors = require("cors");
var multer = require("multer");

const app = express();

const port = process.env.PORT || 3016;
// sessions


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use("/", router);


app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.post(
  "/profile-upload",
  upload.single("profile-file"),
  function (req, res, next) {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file));
    // var response = '<a href="/">Home</a><br>';
    // response += "Files uploaded successfully.<br>";
    // response += `<img src="${req.file.path}" /><br>`;
    return res.status(201).send(req.file.path);
  }
);



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
	console.log(`running port: ${port}`);
});

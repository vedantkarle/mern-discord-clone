const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./helpers/connectDB");

const app = express();

app.use([cors(), express.json()]);

//Routes

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log("listening on port " + PORT);
});

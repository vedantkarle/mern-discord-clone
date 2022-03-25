const express = require("express");
const http = require("http");
const cors = require("cors");
const socketServer = require("./socketServer");
require("dotenv").config();
require("./helpers/connectDB");

const app = express();

app.use([cors(), express.json()]);

//Routes

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/friends", require("./routes/friends.routes"));

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
socketServer.registerSocketServer(server);

server.listen(PORT, () => {
	console.log("listening on port " + PORT);
});

const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("DB Connected");
	})
	.catch(err => console.log(err.message));

mongoose.connection.on("connected", () => {
	console.log("Mongoose Connected to DB");
});

mongoose.connection.on("error", err => {
	console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose Disconnected");
});

process.on("SIGINT", async () => {
	await mongoose.connection.close();
	process.exit(0);
});

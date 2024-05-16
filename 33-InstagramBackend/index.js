const express = require("express")
const mongoose = require("mongoose")
const routes = require("./src/routes/userRoute") // new

mongoose
	.connect("mongodb+srv://yaqubhacili6:yaqub.66@cluster0.paqvy4a.mongodb.net/userss?retryWrites=true&w=majority&appName=Cluster0")
	.then(() => {
		const app = express()
		app.use("/api", routes) // new

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
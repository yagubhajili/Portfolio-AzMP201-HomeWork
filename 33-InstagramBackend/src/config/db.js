const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('server is working');
    }).catch(err => {
        console.log('server is not workin ' + err)
    })
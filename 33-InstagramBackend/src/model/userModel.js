const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    surname: String,
    password: String,
    email: String,
    gender: String,
    accountDAte: Date,
    isAdmin: Boolean,
    profilePicture: String,
    friends: [],
    images: []


})

module.exports = mongoose.model("User", userSchema)
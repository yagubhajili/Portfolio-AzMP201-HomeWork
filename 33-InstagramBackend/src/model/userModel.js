const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: String,
    userName: String,
    password: String,
    email: String,
    gender: String,
    isAdmin: Boolean,
    profilePicture: String,
    friends: Array,
    images: Array

}, { collection: "User", timeStamps: true });

module.exports = mongoose.model("User", userSchema);

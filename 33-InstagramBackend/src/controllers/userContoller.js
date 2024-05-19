const express = require("express")
const User = require("../model/userModel.js")

const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.send(allUsers)
    } catch (error) {
        res.send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await User.findOneAndDelete({ _id: id })
        res.send(deletedUser)
    } catch (error) {
        res.send(error)

    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById({ _id: id })
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

const postUser = async (req, res) => {

    try {
        const obj = req.body;
        console.log(obj)
        const newUser = new User(obj);
        newUser.save()
        res.status(200).send(newUser);
    } catch (error) {
        res.semd(error)
    }
}

const patchUserById = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const editedUser = await User.findOneAndUpdate({ _id: id }, req.body)
        res.send(editedUser)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAllUser, getUserById, postUser, patchUserById, deleteUser }
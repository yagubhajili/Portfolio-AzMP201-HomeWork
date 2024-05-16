const express = require("express")
const User = require("../model/userModel") // new
const router = express.Router()
const UserController = require('../controllers/userContoller')

// Get all posts
router.get("/userss", UserController.getAllUser)
router.post("/userss", UserController.postUser)
router.get("/userss/:id", UserController.getUserById)
router.delete("/userss/:id", UserController.deleteUserById)
router.patch("/userss/:id", UserController.patchUserById)
router.put("/userss/:id", UserController.putUserById)

module.exports = router
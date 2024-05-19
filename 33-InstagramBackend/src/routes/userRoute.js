const express = require("express")
const router = express.Router()
const userContoller = require('../controllers/userContoller.js')

router.get("/users", userContoller.getAllUser)
router.get("/users/:id", userContoller.getUserById)
router.post("/users", userContoller.postUser)
router.patch("/users/:id", userContoller.patchUserById)
router.delete("/users/:id", userContoller.deleteUser)







module.exports = router
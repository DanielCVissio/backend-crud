// const express = require("express")
// const User = require("./models/User") // new
// const router = express.Router()

// // Get all posts
// router.get("/user", async (req, res) => {
// 	const user = await User.find()
// 	res.send(user)
// })

// router.post("/user", async (req, res) => {
// 	const user = new User({
// 		username: req.body.username,
// 		password: req.body.password,
// 	})
// 	await user.save()
// 	res.send(user)
// })

// module.exports = router
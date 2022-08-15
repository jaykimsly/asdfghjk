const express = require("express")
const Post = require("../models/cust.model") // new
const router = express.Router()

// Get all customers
router.get("/customers", async (req, res) => {
	const customers = await Post.find()
	res.send(customers)
})

router.post("/customers", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		content: req.body.content,
	
	})
	await post.save()
	res.send(post)
})

router.get("/customers/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.patch("/customers/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.firstName) {
			post.content = req.body.firstName
		}
		if (req.body.lastName) {
			post.content = req.body.lastName
		}
		if (req.body.content) {
			post.content = req.body.content
		}


		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.delete("/customers/:id", async (req, res) => {
	try {
		await Post.findOneAndRemove({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router
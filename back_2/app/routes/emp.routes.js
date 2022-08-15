const express = require("express")
const Employee = require("../models/emp.model") // new
const router = express.Router()

// Get all employees
router.get("/employees", async (req, res) => {
	const employees = await Employee.find()
	res.send(employees)
})


// Create an employee
router.post("/employees", async (req, res) => {
	const employee = new Employee({
		title: req.body.title,
		name: req.body.name,
		surname: req.body.surname,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		img: req.body.img
	})
	await employee.save()
	res.send(employee)
})



// Get each employee
router.get("/employees/:id", async (req, res) => {
	try {
		const employee = await Employee.findOne({ _id: req.params.id })
		res.send(employee)
	} catch {
		res.status(404)
		res.send({ error: "Employee doesn't exist!" })
	}
})


// Edit each employee
router.patch("/employees/:id", async (req, res) => {
	try {
		const employee = await Employee.findOne({ _id: req.params.id })

		if (req.body.title) {
			employee.title = req.body.title
		}

		if (req.body.name) {
			employee.content = req.body.name
		}

		if (req.body.surname) {
			employee.content = req.body.surname
		}
		if (req.body.start_date) {
			employee.content = req.body.start_date
		}
		if (req.body.end_date) {
			employee.content = req.body.end_date
		}

		if (req.body.img) {
			employee.content = req.body.img
		}

		await employee.save()
		res.send(employee)
	} catch {
		res.status(404)
		res.send({ error: "Employee doesn't exist!" })
	}
})


// Delete each employee
router.delete("/employees/:id", async (req, res) => {
	try {
		await Employee.findOneAndRemove({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Employee doesn't exist!" })
	}
})

module.exports = router
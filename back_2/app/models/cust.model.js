const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	firstName: String,
	lastName: String,
	content: String,
})

module.exports = mongoose.model("Customers", schema)
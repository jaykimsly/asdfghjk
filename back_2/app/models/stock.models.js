const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
    image: String,
    category: String,
    price: Number,
    quantity: Number,
})

module.exports = mongoose.model("Stocks", schema)
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title:String,
    name:String,
    surname:String,
    start_date:String,
    end_date:String,
    img:String
})

module.exports = mongoose.model("Employees", schema)
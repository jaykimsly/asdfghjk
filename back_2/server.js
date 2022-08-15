const express = require("express")
const mongoose = require("mongoose") // new
const cust_routes = require("./app/routes/cust.roustes.js") 
const stock_routes = require("./app/routes/stock.routes.js") 
const emp_routes = require("./app/routes/emp.routes.js") 
const cors = require("cors"); //import cors module
const app = express(); //Initialize express
var corsOptions = {
  origin: ["*", "http://localhost:4200", "https://0.0.0.1"],
  credentials: true
};
const bodyParser = require('body-parser');

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://JayKimSly:Joachim_Sly5@cluster-0.dikam.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json());  // to support JSON-encoded
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist/angular'))
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

		app.use(express.json()) // new
		app.use("/api", cust_routes) // new
		app.use("/api", stock_routes) // new
		app.use("/api", emp_routes) // new

		app.listen(5000, () => {
			console.log("Up Up Up we go!!!")
		})
	})
	
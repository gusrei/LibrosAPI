var express = require("express"), 
app = express(), 
port = process.env.PORT || 3000;

mongoose = require("mongoose"),   
Libro = require("./api/models/LibroModel"),

//created model loading here
bodyParser = require("body-parser");    

// mongoose instance connection url connection 
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost:27017/Libros");

app.use(bodyParser.urlencoded({ extended: true })); app.use(bodyParser.json());   
var routes = require('./api/routes/LibroRoute'); 

//importing route 
routes(app); 

//register the route   S
app.listen(port);   
console.log("Servidor para RESTful API de Libros iniciada en puerto: " + port);
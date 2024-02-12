const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://hemangpatel:admin%40project.com@personalcluster.r831tea.mongodb.net/").then(()=>{console.log("MongoDB coonected to cluster!");});


app.get("/",(req,res,next)=>{
	res.send("<h1>Student Hub Project Initialized!</h1>");
});
app.listen(8000,()=>{
	console.log("Server Started on PORT : 8000");
});
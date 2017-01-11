//Dependencies
//============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Listener
//============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Data
//============================================================
var surveyResults = [
{
  name:"Ahmed",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
	]
}
];

//Routes
//============================================================
app.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function(request, response){
	response.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/api-friends", function(request, response){
	response.json(surveyResults);
});
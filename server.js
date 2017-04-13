//Dependencies
//============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


//Setup
//============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "app/public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Router
//============================================================
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


//API Post Requests
//============================================================
app.post("/api-routes", function(request, response){
  response.json(true);
});


//Listener
//============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
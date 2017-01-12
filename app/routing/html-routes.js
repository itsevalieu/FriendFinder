//Dependencies
//============================================================
var path = require("path");

//Routing
//============================================================
module.exports = function(app){
	app.get("/survey", function(request, response){
		response.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	//Default to home if no matching route:
	app.use(function(request, response){
		response.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};
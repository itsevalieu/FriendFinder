//Dependencies
//============================================================
var path = require("path");

//Data
//============================================================
var surveyResults = require("../data/friends.js");

//Routes
//============================================================

module.exports = function(app){
	app.get("/api-friends", function(request, response){
		response.json(surveyResults);
	});
};

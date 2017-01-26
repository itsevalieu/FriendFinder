//Dependencies
//============================================================
var path = require("path");

//Data
//============================================================
var friends = require("../data/friends.js");

//Routes
//============================================================

module.exports = function(app){
	app.get("/api-friends", function(request, response){
		console.log(friends);
		response.json(friends);
	});

	app.post("/api-friends", function(request, response){
		//takes in JSON input of new friend
		var newFriend = request.body;

		console.log(newFriend);
		
		var nFriendScores = [];
		var friendsScores = [];
		var totalScores = [];

		//converts string to int
		nFriendScores = changeToIntegers(newFriend.scores);
		console.log("New friend scores: " + nFriendScores);
		
		//compare nfriendscore with rest of friends in array & get total scores
		for(var i = 0; i < friends.length; i++) {
			friendsScores[i] = changeToIntegers(friends[i].scores);
			totalScores[i] = calculateTotal(friendsScores[i], nFriendScores);
		}
		var bestMatch =  friends[calculateLeastDiff(totalScores)];
		//return to survey.html data
		console.log("Best match is " + bestMatch.name);

		response.json(bestMatch);


		//add to friends array (must add after so best match isn't new friend)
		friends.push(newFriend);
	});

	//convert string scores to integers
	function changeToIntegers(array){
		var scores = [];
		for(var i = 0; i < 10; i++){	
			scores[i] = parseInt(array[i]);	
		}
		return scores;
	}

	//get the total after calculating differences in each score
	function calculateTotal(arr1, arr2){
		var difference = [];
		var total = 0;

		for(var i = 0; i < 10; i++){
			difference[i] = Math.abs(arr1[i] - arr2[i]);
			total += difference[i];
		}
		return total;
	}

	function calculateLeastDiff(array){
		var min = array[0];
		var minIndex = 0;
		for(var i = 0; i < array.length; i++){
			if(array[i] < min){
				minIndex = i;
				min = array[i];
			}
		}
		return minIndex;
	}
};

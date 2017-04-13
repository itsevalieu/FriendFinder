//Data
//==============================================
$(".submit").on("click", function(){

	//Validation of form completion
	function validate(){
		var valid = true;
		$(".form-control").each(function(){
			if($(this).val()=== ""){
				valid = false;
			}
		});

		return valid;
	}

	if (validate() === true) {
		//Grab form data
		var results = {
			name: $("#name").val().trim(),
			photo: $("#imageLink").val().trim(),
			scores: [
				$("#question1").val(), 
				$("#question2").val(), 
				$("#question3").val(),
				$("#question4").val(),
				$("#question5").val(),
				$("#question6").val(),
				$("#question7").val(),
				$("#question8").val(),
				$("#question9").val(),
				$("#question10").val()
			]
		};
		
		console.log("Results: " + results);	

		var currentURL = window.location.origin;

		$.post(currentURL + "/api-friends", results, function(bestMatch){
			$("#matchName").text(bestMatch.name);
			$("#matchImg").attr("src", bestMatch.photo);
			
			$("#myModal").modal("toggle");
			console.log("Modal showing");
		});
	} else {
		alert("Please fill out all fields to get your best match!");
	}
	return false;
});
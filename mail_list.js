$(document).ready(function() {
	// move focus to first text box
	$("#email").focus();
	
	
	
	// the handler for the click event of the submit button
	$("#member_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);
			 
			// validate the password entry
			var password = $("#password").val().trim();
			if ( password.length < 6) {
				$("#password").next().text("Must be 6 or more characters.");
				isValid = false;
			} else {
				$("#password").next().text("");
			}
			$("#password").val(password);
			
			// validate the verify entry
			var verify = $("#verify").val().trim();
			if (verify == "") { 
				$("#verify").next().text("This field is required.");
				isValid = false; 
			} else if (verify !== password) { 
				$("#verify").next().text("Must equal first password entry.");
				isValid = false;
			} else {
				$("#verify").next().text("");
			}
			$("#verify").val(verify);
			
			
						
			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if (firstName == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#first_name").next().text("");
			}
			$("#first_name").val(firstName);
						
			
						
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready
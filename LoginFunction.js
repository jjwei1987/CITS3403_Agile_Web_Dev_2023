function login() {
	// get username and password input values
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	// check if username and password are correct (dummy example)
	if (username === "user" && password === "password") {
		// redirect to chat page
		window.location.href = "JakeJChat.html?username=" + encodeURIComponent(username);
	} else {
		alert("Invalid username or password");
	}
}

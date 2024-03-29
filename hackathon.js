document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid
    if (username === "admin" && password === "password") {
        // Redirect to job requirements page (replace '#' with actual URL)
        window.location.href = "#";
    } else {
        // Display error message
        document.getElementById("message").innerText = "Invalid username or password";
    }
});
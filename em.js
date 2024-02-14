function sendMessage() {
    var message = document.getElementById("adminMessage").value;
    document.getElementById("employeeMessages").innerHTML = message;

    // Display message in separate window
    document.getElementById("separateWindowMessages").innerHTML = message;

    // Clear the message after 24 hours
    setTimeout(function() {
        document.getElementById("employeeMessages").innerHTML = "";
        document.getElementById("separateWindowMessages").innerHTML = "";
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
}
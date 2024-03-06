var correctPassword = "asad12";


var enteredPassword = prompt("Please enter your password:");

if (!enteredPassword) {

    alert("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    
    alert("Correct password ");
} else {
    
    alert("Incorrect password.");
}
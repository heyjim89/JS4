
var phone = prompt("Enter your phone number XXX-XXX-XXXX");
if ( (phone.charAt(3) === '-') && (phone.charAt(7) == '-' ) ) {
	alert("correct");
}
else {
	alert(" Phone naming schema incorrect. Please use XXX-XXX-XXXX ");
}

var birth = prompt("Enter your birthdate XX/XX/XX");
if ( (birth.charAt(2) === '/') && (birth.charAt(5) == '/' ) ) {
	alert("correct");
}
else {
	alert(" Naming schema incorrect. Please use XX/XX/XX ");
}

var postal = prompt("Enter your postal XXXXX or XXXXX-XXXX");
if ( (postal.length === 5) || (postal.charAt(5) == '-' ) ) {
	alert("correct");
}
else {
	alert(" Naming schema incorrect. Please use XXXXX or XXXXX-XXXX");
}

var state = prompt("Enter your State (ex NJ or CO)");
if ( (state.length === 2) && (state === state.toUpperCase() ) ) {
	alert("correct");
}
else {
	alert(" Naming schema incorrect. Please use XX ");
}

var married = prompt("Are you married?");
if ( (married.toUpperCase() === "YES")) {
	alert("correct");
}
else {
	alert(" YAY ");
}








// for(var i=1; i<4; i++){
// 	console.log(i, i, i);
	
// 	for(var i=2; i<4; i++){
// 		console.log(i, i, i);
// 	}
// }







// Initial Java

// console.log("You entered " + word);
// console.log("There are " + word.length + " characters in the word.");
// console.log("The third character is " + word.charAt(2));
// console.log("Lowercase " + word.toLowerCase());
// console.log("Uppercase " + word.toUpperCase());

// console.log("Example: " + "Sometimes people like to " + word);
// console.log("Subword: " + word.substring(1,4));


// The word they entered, verbatim
// How many characters are in it (length property)

// If you have gotten this far, what should you do? Commit!
// Run git init to initialize the folder as a git repository.
// Run git add -A and git commit -m "[ENTER MESSAGE]" to commit your changes to your local repo.
// Create a repo on github using the instructions in How to Git. Push your changes to the remote github repo.
// What the third character is (charAt)
// The word in lowercase (toLowerCase)
// The word in uppercase (toUpperCase)
// The word in a sentence
// The subword from the 2nd to the 4th character, inclusive (substring)
//
// The alert's output might look like this: 
// You entered: Mango 
// There are 5 characters in the word. 
// The third character is 'n' 
// Lowercase: mango 
// Uppercase: MANGO 
// Example: I have wanted a Mango since I was a little boy. 
// Subword: ang
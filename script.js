// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var lowerCaseCheck = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCheck = "0123456789";
var specialCheck ="!@#$%^&*";
var Characters


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Checking the password length 
function lengthCheck() {
  passwordLength = prompt("How long would you like your password?");

  if(passwordLength < 8) {
    alert("Password must be at least 8 characters.");
  lengthCheck();
  }
  else if (passwordLength > 128) {
    alert("Password length too long.");
    lengthCheck();
  }
  else if (isNaN(passwordLength)) {
    alert("Didnt specify a number.");
    lengthCheck();
  }
  return passwordLength;
  
};
// asking user if they want to use lower case letters
function lowerCase() {
  lowerCaseCheck = prompt("Do you want to use lowercase letters?");

  if(lowerCase === true) {
  
  }
return lowerCaseCheck;
};
//  asking user if they want to use upper case letters
function upperCase() {
  upperCaseCheck = prompt("Do you want to use Uppercase letters?"); 

  if(upperCase === true) {
  
  }
return upperCaseCheck;
};
// asking user if they want to use numbers
function numbers() {
  numberCheck = prompt("Do you want to use Numbers?");

  if(numbers === true) {
  
  }
return numberCheck;  
};
// asking user if they want to use special characters
function specials() {
  specialCheck = prompt("Do you want to use Special Characters?");

  if (specials === true) {
  
  }
return specialCheck;  
};

// randomizes all characters to create the password
for(var i = 0; i < passwordLength; i ++) {
  var randomNumber = Math.floor(Math.random() * character.length)
  var randomChar = characterString[randomIndex];
  
};
// calling this function to create a password
function generatePassword() {
  lengthCheck();
  lowerCase();
  upperCase();
  numbers();
  specials();
};
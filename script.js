// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var lowerCaseCheck = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCheck = "0123456789";
var specialCheck ="!@#$%^&*";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Adding and assigning all functions
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

function lowerCase() {
  lowerCaseCheck = prompt("Do you want to use lowercase letters?");

return lowerCaseCheck;
};

function upperCase() {
  upperCaseCheck = prompt("Do you want to use Uppercase letters?"); 

return upperCaseCheck;
};

function numbers() {
  numberCheck = prompt("Do you want to use Numbers?");

return numberCheck;  
};

function specials() {
  specialCheck = prompt("Do you want to use Special Characters?");

return specialCheck;  
};








































function generatePassword() {
  lengthCheck();
  lowerCase();
  upperCase();
  numbers();
  specials();
};
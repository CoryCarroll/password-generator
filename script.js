// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = String.fromCharCode(...Array(123).keys()).slice(97);
var upperCaseChar = String.fromCharCode(...Array(123).keys()).slice(65, 91);
var numberChar = String.fromCharCode(...Array(123).keys()).slice(48, 58);
var specialChar = String.fromCharCode(...Array(123).keys())
.slice(33, 48).concat(String.fromCharCode(...Array(123).keys()).slice(59, 65));
var lowerCase;
var upperCase;
var numbers;
var specials;
var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// calling this function to create a password
function generatePassword() {

  lengthCheck();
  checkLowerCase();
  checkUpperCase();
  checkNumber();
  checkSpecial();
  // creating emtpy strings for my characters and password to be stored in
var characters = "";
var password = "";

  if (lowerCase && upperCase && numbers && specials) {
    characters += lowerCaseChar + upperCaseChar + numberChar + specialChar;
  } else if (lowerCase && upperCase) {
    characters += lowerCaseChar + upperCaseChar;
  } else if (upperCase && numbers) {
    characters += upperCaseChar + numberChar;
  } else if (numbers && specials) {
    characters += numberChar + specialChar;
  } else if (specials && lowerCase) {
    characters += specialChar + lowerCaseChar;
  } else if (lowerCase) {
    characters += lowerCaseChar;
  } else if (upperCase) {
    characters += upperCaseChar;
  } else if (numbers) {
    characters += numberChar;
  } else if (specials) {
    characters += specialChar;
  }


for(var i = 0; i < passwordLength; i++) {
  password += characters.charAt( 
    Math.floor(Math.random() * characters.length)
  );  
}
  return password; 
};


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
function checkLowerCase() {
  lowerCase = prompt("Do you want to use lowercase letters? \n(yes or no)");
  lowerCase = lowerCase.toLowerCase();

  if(lowerCase === null || lowerCase === "") {
    alert("Answer Yes or No");
    checkLowerCase();
    console.log(lowerCase);
  } else if (lowerCase === "yes" || lowerCase === "y") {
    lowerCase = true;
    return lowerCase;

  } else if (lowerCase === "no" || lowerCase === "n") {
    lowerCase = false;
    return lowerCase;

  } else {
    alert("Answer Yes or No");
    checkLowerCase();
  }
return lowerCase;
};


//  asking user if they want to use upper case letters
function checkUpperCase() {
  upperCase = prompt("Do you want to use Uppercase letters? \n(yes or no)"); 
  upperCase = upperCase.toLowerCase();

  if(upperCase === null || upperCase === "") {
    alert("Answer Yes or No");
    checkUpperCase();
    console.log(upperCase);
  } else if (upperCase === "yes" || upperCase === "y") {
    upperCase = true;
    return upperCase;

  } else if (upperCase === "no" || upperCase === "n") {
    upperCase = false;
    return upperCase;

  } else {
    alert("Answer Yes or No");
    checkUpperCase();
  }
return upperCase;
};


// asking user if they want to use numbers
function checkNumber() {
  numbers = prompt("Do you want to use Numbers? \n(yes or no)");
  numbers = numbers.toLowerCase();

  if(numbers === null || numbers === "") {
    alert("Answer Yes or No");
    checkNumber();
    console.log(numbers);
  } else if (numbers === "yes" || numbers === "y") {
    numbers = true;
    return numbers;

  } else if (numbers === "no" || numbers === "n") {
    numbers = false;
    return numbers;

  } else {
    alert("Answer Yes or No");
    checkNumber();
  }
  
return numbers;  
};


// asking user if they want to use special characters
function checkSpecial() {
  specials = prompt("Do you want to use Special Characters? \n(yes or no)");
  specials = specials.toLowerCase();

  if(specials === null || specials === "") {
    alert("Answer Yes or No");
    checkSpecial();
    console.log (specials);
  } else if (specials === "yes" || specials === "y") {
    specials = true;
    return specials;

  } else if (specials === "no" || specials === "n") {
    specials = false;
    return specials;

  } else {
    alert("Answer Yes or No");
    checkSpecial();
  }

return specials;  
};




// calling this function to create a password
function generatePassword() {

  lengthCheck();
  checkLowerCase();
  checkUpperCase();
  checkNumber();
  checkSpecial();
  
var characters = "";
var password = "";

  if (lowerCase && upperCase && numbers && specials) {
    characters += lowerCaseChar + upperCaseChar + numberChar + specialChar;
  } else if (lowerCase && upperCase) {
    characters += lowerCaseChar + upperCaseChar;
  } else if (upperCase && numbers) {
    characters += upperCaseChar + numberChar;
  } else if (numbers && specials) {
    characters += numberChar + specialChar;
  } else if (specials && lowerCase) {
    characters += specialChar + lowerCaseChar;
  } else if (lowerCase) {
    characters += lowerCaseChar;
  } else if (upperCase) {
    characters += upperCaseChar;
  } else if (numbers) {
    characters += numberChar;
  } else if (specials) {
    characters += specialChar;
  }


for(var i = 0; i < passwordLength; i++) {
  password += characters.charAt( 
    Math.floor(Math.random() * characters.length)
  );  
}
  return password; 
};
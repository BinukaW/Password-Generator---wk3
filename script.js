// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseLett; 
var lowercaseLett; 
var numberCharac; 
var specialCharac; 
var selection;

upcL = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowcL = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numCh = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
speCh = ["!", "%", "$", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "]", "_", "`", "{", "|", "}", "~",];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like to have in your password? Password must have between 8-128 characters.");

  if (!passwordLength) {
    window.alert("This requires a numerical value.");
    return "";
  }

  else if (passwordLength < 8) {
    window.alert("Password must have between 8-128 character.");
    passwordLength = window.prompt("How many characters would you like to have in your password? Password must have between 8-128 characters.");
    return "";
  }

  else if  (passwordLength > 128) {
    window.alert("Password must have between 8-128 character.");
    passwordLength = window.prompt("How many characters would you like to have in your password? Password must have between 8-128 characters.");
    return "";
  }

  var uppercaseLett = confirm("Would you like uppercase letters in your password?");
  var lowercaseLett = confirm("Would you like lowercase letters in you password?");
  var numberCharac = confirm("Would you like numbers in your password?");
  var specialCharac = confirm("Would you like special characters in you password?");

  if (!uppercaseLett && !lowercaseLett && !numberCharac && !specialCharac) {
    selection = window.alert("You must select at least one option!");
  }
  
  else if (uppercaseLett && lowercaseLett && numberCharac && specialCharac) {
    selection = upcL.concat(lowcL, numCh, speCh);
  }


  else if (lowercaseLett && numberCharac && specialCharac) {
    selection = lowcL.concat(numCh, speCh);
  } 
  else if (uppercaseLett && numberCharac && specialCharac) {
    selection = upcL.concat(numCh, speCh);
  } 
  else if (uppercaseLett && lowercaseLett && specialCharac) {
    selection = upcL.concat(lowcL, speCh);
  } 
  else if (uppercaseLett && lowercaseLett && numberCharac) {
    selection = upcL.concat(lowcL, numCh);
  }


  else if (uppercaseLett && lowercaseLett) {
    selection = upcL.concat(lowcL);
  }  
  else if (uppercaseLett && numberCharac) {
    selection = upcL.concat(numCh);
  }  
  else if (uppercaseLett && specialCharac) {
    selection = upcL.concat(speCh);
  }  
  else if (lowercaseLett && numberCharac) {
    selection = lowcL.concat(numCh);
  }  
  else if (uppercaseLett && specialCharac) {
    selection = upcL.concat(speCh);
  }  
  else if (numberCharac && specialCharac) {
    selection = numCh.concat(speCh);
  }  


  else if (uppercaseLett) {
    selection = upcL;
  } 
  else if (lowercaseLett) {
    selection = lowcL;
  } 
  else if (numberCharac) {
    selection = numCh;
  } 
  else if (specialCharac) {
    selection = speCh;
  };

  var randompassword = [];

  for (var i = 0; i < passwordLength; i++) {
    randompassword = randompassword + selection[Math.floor(Math.random() * selection.length)]
  }
  return randompassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
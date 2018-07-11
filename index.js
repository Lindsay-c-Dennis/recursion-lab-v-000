function printString(myString) {
  let letter = myString[0];
  console.log(letter);
  if (myString.length > 1) {
    printString(myString.substring(1, myString.length));
  }
}


function reverseString(string) {
  if (string === "") {
    return "";
  } else {  
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  string = string.split('');
  let palStatus = true;
  if (string.length > 1) {
    if (string.pop() === string.shift()) {
      string = string.subset(1, string.length-1);
      console.log(string);
      
    }
  } 
}



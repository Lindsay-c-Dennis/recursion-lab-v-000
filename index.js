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



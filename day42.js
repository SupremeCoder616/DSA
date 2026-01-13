let strValue = "naman";

function checkPalindrome(str) {
  let strResult = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strResult += `${str[i]}`;
  }
  return strResult === str;
}

console.log(checkPalindrome(strValue));

/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  //the input numbers are big
  //the input is a string of only digits
  //the numbers are positives
  let sum = 0;
  let carry = 0;
  let result = "";
  let aLength = a.length;
  let bLength = b.length;
  let maxLength = Math.max(aLength, bLength);
  let minLength = Math.min(aLength, bLength);
  let max = aLength > bLength ? a : b;
  let min = aLength > bLength ? b : a;
  for (let i = 0; i < maxLength; i++) {
    let aDigit = i < aLength ? a[aLength - i - 1] : 0;
    let bDigit = i < bLength ? b[bLength - i - 1] : 0;
    let digit = (parseInt(aDigit) + parseInt(bDigit) + carry) % 10;
    carry = Math.floor((parseInt(aDigit) + parseInt(bDigit) + carry) / 10);
    result = digit + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
}

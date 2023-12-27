let x = 120;

var reverse = function (x) {
  //converting the number to string
  let s = x.toString()
  let newValue = ""

  //validating if it's a negative number
  if (s[0] === '-') {
    newValue = '-';
    s = s.substring(1);  // Remove the negative sign for now
  }

  //reversing the numbers
  for(let i = s.length - 1; i >= 0; i--){      
    newValue += s[i]
  }

  //convert the string back to a integer
  let result = parseInt(newValue);

  // Checking overflow (32-bit signed integer range)
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
};
  
console.log(reverse(x));

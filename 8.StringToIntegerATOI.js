let s = "words and 987"

var myAtoi = function(s) {
  
  let integer = parseInt(s)

  if(isNaN(integer)){
    return 0;
  }
  
  // Clamp to the 32-bit signed integer range
  const minInteger = Math.pow(-2, 31);
  const maxInteger = Math.pow(2, 31) - 1;

  if (integer < minInteger) {
    return minInteger;
  } else if (integer > maxInteger) {
    return maxInteger;
  }

  return integer;
};

// ATOI = ASCII TO INTEGER
console.log(myAtoi(s))
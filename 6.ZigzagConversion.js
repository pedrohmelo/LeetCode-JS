let s = "PAYPALISHIRING";
let numRows = 3;
let newColumn = "";  // Initialize as an empty string
let aux = 0;

var convert = function(s, numRows) {
  while (aux < numRows) {
    newColumn += s[aux];  // Use += to concatenate characters
    aux++;
  }
   
  if(aux == numRows){
    
  }

  return newColumn;
};

console.log(convert(s, numRows));  // Output: "PAY"


// P   A   H   N
// A P L S I I G
// Y   I   R
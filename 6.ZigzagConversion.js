let s = "PAYPALISHIRING";
let numRows = 3;
let newColumn = "";  // Initialize as an empty string
let characterPos = 0;
let rowCount = 1;

//desce na matriz até chegar na posição numRows
//[3]
//vai pra direita e sobe uma casa -> [2]
//coloca valor
//verifica se está na linha 1, se não estiver vai pra direita e sobe uma casa -> [1]


var convert = function(s, numRows) {
  for(const element of s){
    newColumn += s[characterPos]
    characterPos++;
    rowCount++;

    if(rowCount == numRows + 1){
      return newColumn
      //
    }
    
  }

  return newColumn;
};

console.log(convert(s, numRows));  // Output: "PAY"

// P   A   H   N
// A P L S I I G
// Y   I   R

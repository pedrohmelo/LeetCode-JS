let height = [2,3,4,5,18,17,6] //expected output = 17

//This exercise can also be applied the sliding window technique for optimal solution
var maxArea = function(height) {

  let leftIndex = 0;
  let rightIndex = height.length - 1;
  
  let maxArea = [];

    while(leftIndex < rightIndex ){
      //get difference between elements
      let difLenght = rightIndex - leftIndex
    
      //get difference between values do array to get the actual height
      let difHeight = Math.min(height[leftIndex], height[rightIndex])
  
      let currentArea = difLenght * difHeight
  
      console.log(`leftElem = `+height[leftIndex])
      console.log(`rightElem = `+height[rightIndex])
      console.log(`difLenght`+` = `+difLenght)
      console.log(`difHeight`+` = `+difHeight)
      console.log(`area = `+currentArea)
      console.log('===========================')
  
      maxArea = Math.max(maxArea, currentArea);

      //Moving pointers conditionally (didn't understood this very much but it works lol)
      if(height[leftIndex] < height[rightIndex]){
        leftIndex++;
      } else{
        rightIndex--;
      }
      
    }
      
  return maxArea;
};

console.log(maxArea(height))

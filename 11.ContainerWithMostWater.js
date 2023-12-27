let height = [1,8,6,2,5,4,8,3,7]
//Output: 49

//This exercise can also be applied the sliding window technique for optimal solution
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = [];

  while(left <= right){
    //get difference between elements
    let difLenght = right - left

    //get difference between values do array to get the actual height
    let difHeight = Math.min(height[left], height[right])

    let currentArea = difLenght * difHeight
    
    maxArea = Math.max(maxArea, currentArea);
    console.log(maxArea)
    left++;
    right--;
  }
  
  return maxArea;

};

console.log(maxArea(height))
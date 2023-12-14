//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    // Create a Map to store the complement of each element along with its index
    const complementMap = new Map();
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      // Calculate the complement for the current element
      const complement = target - num;
  
      // Check if the complement is already in the Map
      if (complementMap.has(complement)) {
        // If found, return the indices of the two numbers
        return [complementMap.get(complement), i];
      }
  
      // If not found, add the current element and its index to the Map
      complementMap.set(num, i);
    }
  
    // If no solution is found, return an empty array or handle it according to your requirements
    return [];
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 22;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
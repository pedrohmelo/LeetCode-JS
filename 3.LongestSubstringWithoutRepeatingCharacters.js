//Basically this exercise is a application of the sliding window technique
var lengthOfLongestSubstring = function(s) {
    const characterSet = new Set();
    
    let left = 0;
    let right = 0;
  
    let maxLength = 0;
  
    while(right < s.length){
      //Checking if my right position has the character
      if(!characterSet.has(s[right])){
        //add the character to the collection
        characterSet.add(s[right])
        //update maxLength
        maxLength = Math.max(maxLength, right - left + 1)
        //move Right pointer to the next position
        right++;
      } else{
        // If the character is in the set, move the left pointer
        // Remove the character at the left pointer from the set
        characterSet.delete(s[left]);
        // Move the left pointer to the next character
        left++;
      }
    }
    return maxLength;
  };
  
  console.log(lengthOfLongestSubstring("abcabcbb"))
  console.log(lengthOfLongestSubstring("pwwkew"))
  console.log(lengthOfLongestSubstring("bbbbb"))
  
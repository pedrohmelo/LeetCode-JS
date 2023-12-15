function isPalindrome(x) {
    const xStr = String(x)
    
    let left  = 0
    let right = xStr.length - 1;
    
    while(left < right){
      if(xStr[left] !== xStr[right]){
        return false;
      }
  
      left++;
      right--;
    }
    //if the loop completes, then it's a palindrome
    return true;
  }
  
  // Example usage:
  console.log(isPalindrome(121)); // Output: true
  console.log(isPalindrome(-121)); // Output: false
  console.log(isPalindrome(10)); // Output: false
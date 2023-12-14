const arr = [5, 7, 1, 4, 3, 6, 2, 9, 2];

const getSum = (arr, start, end) => {
  let sum = 0;

  for(i = start; i <= end; i++){
    sum += arr[i]
  }

  return sum;
}

const getLargestSumOfFiveConsecutiveElements = (arr) => {
  let currSum = getSum(arr, 0, 4);
  let largestSum = currSum;

  for(let i = 1; i <= arr.length - 5; i++){
    currSum -= arr[i - 1]; //subtract element to the left of current window
    currSum += arr[i + 4]; //add last element in current window
    largestSum = Math.max(largestSum, currSum);
  }

  return largestSum;
}

console.log(getLargestSumOfFiveConsecutiveElements(arr))
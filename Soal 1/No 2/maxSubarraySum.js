function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const input1 = [100, 200, 300, 400];
const num1 = 2;
console.log(maxSubarraySum(input1, num1));

const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const num2 = 4;
console.log(maxSubarraySum(input2, num2));

const input3 = [-3, 4, 0, -2, 6, -1];
const num3 = 2;
console.log(maxSubarraySum(input3, num3));

module.exports = maxSubarraySum;

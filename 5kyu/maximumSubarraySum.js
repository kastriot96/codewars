/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
var maxSequence = function (arr) {
  //if the array is made up only of negative numbers, return 0
  if (
    arr.every(function (item) {
      return item < 0;
    })
  ) {
    return 0;
  }
  //if the array is made up only of positive numbers, return the sum of the whole array
  if (
    arr.every(function (item) {
      return item > 0;
    })
  ) {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  }
  //if the array is made up of both positive and negative numbers, return the sum of highest consecutive positive numbers
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

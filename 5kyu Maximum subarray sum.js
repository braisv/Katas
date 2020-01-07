/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/


// =================== SOLUTION ===================

var maxSequence = function(arr){
  let result = 0, min = 0, sum = 0;
  arr.map(i => {
    sum += i;
    min = Math.min(sum, min);
    result = Math.max(result, sum - min);
    })
  return result;
}

console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])) // 0
console.log(maxSequence([-90, 1, -3, 4, -1, 2, 1, -5, 5])) // 6



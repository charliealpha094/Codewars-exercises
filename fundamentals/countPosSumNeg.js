// Done by Carlos Amaral (2022/02/01)

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositiveSumNegative(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let sum = 0;
  let count = 0;
  input.forEach(function (el) {
    if (el > 0) {
      count++;
    } else {
      sum += el;
    }
  });
  return [count, sum];
}

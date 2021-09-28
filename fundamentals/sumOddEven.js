// Done by Carlos Amaral (2021/09/25)

/* 
Given a list of integers, determine whether the sum of its elements is odd or
even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"   */

function oddOrEven(array) {
  // Empty variable to store the sum of the array
  let sumArray = 0;
  // Loop through the array and add each number to the new variable
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  if (sumArray % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([2, 1, 2]));
console.log(oddOrEven([2, 3, 3]));

// Done by Carlos Amaral (2021/10/05)

/*
Given a 2D array of size m * n. Your task is to find the sum of minimum value in 
each row.

For Example:
[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values. */

// Solution
// Start by creating a total variable and initialize it to o.
// Loop through the passed array and find the minimum value inside each array.
// Add that minimum value to the total variable. Return that value

function sumOfMinimums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Math.min(...arr[i]);
  }
  return total;
}
console.log(
  sumOfMinimums([
    [1, 2, 3, 4],
    [12, 23, 32, 1],
    [392, 23, 12],
  ])
);

// Done by Carlos Amaral (2021/09/01)

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

// The sum of each row is equivalent to the number of each row with 3 exponential

function rowSumOddNumbers(n) {
  return n ** 3;
}

// or
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

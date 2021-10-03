// Done by Carlos Amaral (2021/10/03)

/*
Create a function that returns the sum of the two lowest positive numbers given
an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should 
be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// 1st: Sort the array, so it can find the two lowest number.
// 2nd: Sum the two smallest numbers.

function sumTwoSmallestNumbers(numbers) {
  let s = numbers.sort((a, b) => a - b).slice(0, 2);
  sum = s[0] + s[1];
  return sum;
}

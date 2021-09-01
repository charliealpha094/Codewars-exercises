// Done by Carlos Amaral (2021/08/25)

/*
 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321
*/

function descendingOrder(n) {
  let result = n
  // Convert the number into a string
    .toString()
  // Split each string char into an array of chars
    .split('')
  // Sort the array in descending order
    .sort((a, b) => b - a)
  // Regroup all items in that array into 1 string
    .join('')
  // Turn the string back to a number
  return parseInt(result);
    

}

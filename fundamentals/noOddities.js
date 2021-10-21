// Done by Carlos Amaral (2021/10/21)

/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order 
they are given.
*/

function noOdds(values) {
  return values.filter(function (n) {
    return n % 2 === 0;
  });
}

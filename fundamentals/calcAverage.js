// Done by Carlos Amaral (2022/02/02)

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

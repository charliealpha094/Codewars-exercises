// Done by Carlos Amaral (2021/09/01)

/*
In this simple assignment you are given a number and have to make it negative.
 But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
*/

// Solution using if/else
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Solution using ternary operator
function makeNegative(num) {
  return num > 0 ? -num : num;
}

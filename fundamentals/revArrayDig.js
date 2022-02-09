// Done by Carlos Amaral (2022/02/09)

/*
Given a random non-negative number, you have to return the digits of this number 
within an array in reverse order.
*/

function digitize(n) {
  let arr = String(n).split("").map(Number).reverse();
  return arr;
}

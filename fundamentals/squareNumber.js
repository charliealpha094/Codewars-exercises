// Done by Carlos Amaral (2022/02/08)

/*
Welcome. In this kata, you are asked to square every digit of a number and 
concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because
 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  let numString = num.toString();
  let arr = [];
  numString.split("").map((n) => {
    arr.push(n ** 2);
  });
  return parseInt(arr.join(""));
}

// Now with a for loop

function squareDigits1(num) {
  let numString1 = num.toString();
  let arr = [];
  for (let i = 0; i < numString1.length; i++) {
    arr[i] = numString1[i] * numString1[i];
  }
  return Number(arr.join(""));
}

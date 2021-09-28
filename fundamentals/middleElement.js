// Done by Carlos Amaral (2021/09/28)

/* 
As a part of this Kata, you need to create a function that when provided with a
triplet, returns the index of the numerical element that lies between the other
two elements.
The input to the function will be an array of three distinct numbers (Haskell: 
a tuple).

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input 
array is 0.
*/

let gimme = function (inputArray) {
  // Make a copy/clone of the input array
  const copyArray = [...inputArray];
  // Sort the copied array in ascending order
  copyArray.sort(function (a, b) {
    return a - b;
  });
  // Return the index of the middle element
  return inputArray.indexOf(copyArray[1]);
};

console.log(gimme([12, 2, 7]));
console.log(gimme([33, 9, 18]));

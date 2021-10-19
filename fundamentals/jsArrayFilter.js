// Done by Carlos Amaral (2021/10/19)

/* 
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use 
the filter functionality to complete the function given.

The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function (n) {
    return n % 2 == 0;
  });
}

// Convert the last function into an array function
const getEvenNumbers2 = (numbersArray) =>
  numbersArray.filter((n) => n % 2 == 0);

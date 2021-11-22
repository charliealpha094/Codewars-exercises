// Done by Carlos Amaral (2021/11/22)

/*
Task
Given an array of integers, remove the smallest value. Do not mutate the 
original array/list. If there are multiple elements with the same value, remove 
the one with a lower index. If you get an empty array/list, return an empty
 array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1] */

function removeSmallest(numbers) {
  const copy = [...numbers];
  const smallest = Math.min(...numbers);
  const indexSmall = numbers.indexOf(smallest);
  copy.splice(indexSmall, 1);
  return copy;
}

console.log(removeSmallest([1, 2, 4, 5]));

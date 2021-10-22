// Done by Carlos Amaral (2021/10/22)

/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findSort(s) {
  return Math.min(
    ...s.split(" ").map(function (s) {
      return s.length;
    })
  );
}

console.log(findSort("Tomorrow we will have a sunny day"));

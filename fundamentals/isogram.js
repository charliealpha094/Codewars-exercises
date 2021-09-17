// Done by Carlos Amaral (2021/009/17)

/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  // Create a set in order to separate all the letters
  let newSet = new Set(str.toUpperCase());
  // Size of the set
  let sizenewSet = newSet.size;
  // Compare the size of the set with the size of the string
  return str.length == sizenewSet;
}

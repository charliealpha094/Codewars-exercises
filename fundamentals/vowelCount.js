// Done by Carlos Amaral (2021/08/26)

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  // 1st: we have to create a variable to track the number of vowels in the string
  let vowelsCount = 0;

  // 2nd: Create an array that holds all the vowels of the alphabet
  const vowels = ["a", "e", "i", "o", "u"];
  // loop through the passed string
  for (let i = 0; i < str.length; i++) {
    // loop through vowels
    for (let j = 0; j < vowels.length; j++) {
      // if there is a vowel in the string
      if (str[i] === vowels[j]) {
        // increase the vowelsCount
        vowelsCount++;
      }
    }
    return vowelsCount;
  }
}

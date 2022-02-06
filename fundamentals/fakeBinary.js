// Done by Carlos Amaral (2022/02/06)

/*
Given a string of digits, you should replace any digit below 5 with '0' and any
digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) < 5) {
      newStr += 0;
    } else {
      newStr += 1;
    }
  }
  return newStr;
}

// Done by Carlos Amaral (2021/09/22)

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must
return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true 
*/

function XO(str) {
  name = str.toLowerCase();
  if (name.split("x").length === name.split("o").length) {
    return true;
  } else {
    return false;
  }
}

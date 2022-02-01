// Done by Carlos Amaral (2022/02/01)

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a
 given string.
 */

function RemoveExclamationMarks(s) {
  return s.split("!").join("");
}

console.log(RemoveExclamationMarks("Carlos!"));

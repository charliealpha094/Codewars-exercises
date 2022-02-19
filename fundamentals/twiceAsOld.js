// Done by Carlos Amaral (2022/02/19)

/*
Your function takes two arguments:
current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how 
many years he will be twice as old).
*/

const twiceAsOld = function (fatherAge, sonAge) {
  return Math.abs(fatherAge - 2 * sonAge);
};

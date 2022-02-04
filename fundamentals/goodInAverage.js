// Done by Carlos Amaral (2022/02/03)

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the
 average student in your class.

You receive an array with your peers' test scores. Now calculate the average and
compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
*/

// 1st: Sum all the scores in the class
// 2nd: Calculate the average of the class
// 3rd: Compare myPoints to the average of the class

function betterThanAverage(classPoints, yourPoints) {
  const sumClassScores = classPoints.reduce((a, b) => a + b, 0);
  const avgClass = sumClassScores / classPoints.length;
  const amIBetter = yourPoints > avgClass;
  return amIBetter;
}

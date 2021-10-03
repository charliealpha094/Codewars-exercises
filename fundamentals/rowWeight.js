// Done by Carlos Amaral (2021/10/04)

/* 
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes 
into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new 
array/tuple of two integers, where the first one is the total weight of team 1,
and the second one is the total weight of team 2.

rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27
is the total weight of team 2.
*/

////////////////////////////////
// Resolution
// 1st: Team1 only has odd numered people, while team2 has even numbered people.

// 2nd: Create one empty variable for team1, team2 ad ab enot array for the
//total result

// 3rd: Loop through the passed array, and if the number of each  person is even,
// add them to team1, otherwise they should go to the team2.

// 4th: In the end, "push" the final values of team1 and team2 variables to the
// initially empty array that stores the final result.

// 5th: Return the final array.

function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1 += array[i];
    } else {
      team2 += array[i];
    }
  }
  result.push(team1, team2);
}

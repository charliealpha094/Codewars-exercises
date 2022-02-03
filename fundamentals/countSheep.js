// Done by Carlos Amaral (2022/01/03)

/*
Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative
 integers.
*/

let countSheep = function (num) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    str += `${i} sheeps... `;
  }
  return str;
};

console.log(countSheep(7));

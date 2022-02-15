// Done by Carlos Amaral (2022/02/15)

/*
Given an integer as input, can you round it to the next (meaning, "higher")
multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
*/

function roundToNext5(n) {
  while (n % 5) return n++;
  return n;
}

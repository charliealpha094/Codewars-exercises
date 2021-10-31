// Done by Carlos Amaral (2021/10/31)

/*
Given a string made up of letters a, b, and/or c, switch the position of letters
a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheero(x) {
  return x
    .split("")
    .map(function (e) {
      if (e === "a") return "b";
      else if (e === "b") return "a";
      else if (e === "c") return "c";
    })
    .join("");
}

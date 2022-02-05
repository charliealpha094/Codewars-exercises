// Done by Carlos Amaral (2022/02/05)

/*
When documents (especially pretty old ones written with a typewriter), are
 digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle 
the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string) {
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "5") {
      arr.push("S");
    } else if (string[i] === "0") {
      arr.push("O");
    } else if (string[i] === "1") {
      arr.push("I");
    }
  }
  return arr.join("");
}

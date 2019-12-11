/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/


// ================= SOLUTION ===================


var countDeafRats = function(town) {
  let deafRats = 0;
  
  town = town.split("").filter( (char) => char !== " ").join("").split("P");
  town[0] = town[0].split("").reverse().join("");
  town = town.join("");
  
  for (let i=0; i<town.length-1; i+=2) {
    if (town[i]=== "~" && town[i+1] === "O")
      deafRats++;
  }

  return deafRats;
}


/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
*/



// ================ SOLUTION ====================


function meeting(s) {
  let names = [];
  let listOfFriends = "";
  let namesUpperCase = s.toUpperCase().split(";");
  let lastNames = namesUpperCase.map(n=>n.substring(n.indexOf(":")+1));
  let firstNames = namesUpperCase.map(n=>n.substring(0, n.indexOf(":")));

  for (i=0; i<lastNames.length; i++) {
    names.push(lastNames[i] + ", " + firstNames[i])
  }

  for (i=0; i<lastNames.length; i++) {
    listOfFriends += "(" + names.sort()[i] + ")"
  }
  return listOfFriends
}


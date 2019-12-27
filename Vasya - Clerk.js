/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/



// ======================= SOLUTION ========================

function tickets(peopleInLine){
  let result = "YES"
  let vasya = {
    s: 0,
    m: 0,
    l: 0
  }

  peopleInLine.map(p => {
    if (p === 25) vasya.s++
    if (p === 50) {
      vasya.m++
      vasya.s >= 1 ? vasya.s-- : result = "NO"
    }
    if (p === 100) {
      vasya.l++
      if (vasya.s >= 1 && vasya.m >= 1 || vasya.s >= 3) {
        if (vasya.s >= 1 && vasya.m >= 1) {
        vasya.s--
        vasya.m --
        }
        if (vasya.s >= 3 && vasya.m < 1) {
        vasya.s-=3
        }
      } else {
        result = "NO"
      }
    }
  })
  return result
}



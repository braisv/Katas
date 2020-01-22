/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/



// ================== SOLUTION ===================


const pigIt = (str) => {
  return str.split(" ").map(s => ('!?'.indexOf(s) === -1) ? s.substr(1) + s.substr(0, 1) + 'ay' : s).join(" ")
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !



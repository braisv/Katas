/*
You need to play around with the provided string (s).
Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.
Exceptions:
If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
Provided string will always be lower case, won't be empty and will have no special characters.
*/

// ======================== SOLUTION ========================

function vowelBack(s){
  let chars = s.split("");
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (i=0; i<s.length; i++) {
    switch (chars[i]) {
      case 'a':
      case 'i':
      case 'u':
        if (alphabet.indexOf(chars[i]) >= 5) {
          chars[i] = alphabet[alphabet.indexOf(chars[i])-5];
          if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])+5];
        } else {
          chars[i] = alphabet[alphabet.indexOf(chars[i])+21];
          if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])-21];
        }
        break;
      case 'c':
      case 'o':
        chars[i] = alphabet[alphabet.indexOf(chars[i])-1];
        if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])+1];
        break;
      case 'd':
        chars[i] = alphabet[alphabet.indexOf(chars[i])-3];
        if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])+3];
        break;
      case 'e':
        chars[i] = alphabet[alphabet.indexOf(chars[i])-4];
        if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])+4];
        break;
      default:
        if (alphabet.indexOf(chars[i]) <= 16) {
          chars[i] = alphabet[alphabet.indexOf(chars[i])+9];
          if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])-9];
        } else {
          chars[i] = alphabet[alphabet.indexOf(chars[i])-17];
          if (chars[i] === 'c' || chars[i] === 'o' || chars[i] === 'd' || chars[i] === 'e') chars[i] = alphabet[alphabet.indexOf(chars[i])+17];
        } 
    }
  }
  return chars.join('')
}


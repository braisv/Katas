/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/


// ==================== SOLUTION ========================


function validParentheses(parens){
  let validation = 0
  parens.split("").map(i => {
    i === '(' ? validation++ : validation--
    if (validation < 0) validation = false;
  })
  return validation === 0 ? true : false
}


validParentheses( "())" );
validParentheses( "(()()((()(()))))" );


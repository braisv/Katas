/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.
Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/



// ================== SOLUTION ===================

function primeFactors(n) {
  let result = "";
  for (let prime = 2; prime <= n; prime++) {
  let pow = 0;
    while (n % prime == 0) { pow++; n /= prime }
      result += pow ? "(" + ( pow > 1 ? prime + "**" + pow  : prime ) +")" : "";
  }
  return result;
}



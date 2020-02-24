/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

// ================ SOLUTION ===================

snail = (array) => {
  let result = [];
  let n = array[0].length - 1;

  for (r = 0; r <= (n - r); r++) {
    for (c = 0 + r; c <= (n - r); c++) {
      result.push(array[r][c])

      if (c === n - r) {
        for (d = r + 1; d <= (n - r); d++) {
          result.push(array[d][c])

          if (d === n - r) {
            for (l = c - 1; l >= 0 + r; l--) {
              result.push(array[d][l])
              
              if (l === 0 + r) {
                for (u = d - 1; u > r; u--) {
                  result.push(array[u][l])
                }
              }
            }
          }
        }
      }
    }
  }
  return result
}

snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
  
  

/*
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/


// ============================== SOLUTION ===============================

function legal(puzzle, i, j, val) {
  for (var c = 0; c < 9; c++) {
    if (puzzle[i][c] === val) {
      return false;
    }
  }
  
  for (var r = 0; r < 9; r++) {
    if (puzzle[r][j] === val) {
      return false;
    }
  }

  var r = Math.floor(i / 3) * 3;
  var c = Math.floor(j / 3) * 3;  

  for (var k = r; k < r + 3;  k++) {
    for (var l = c; l < c + 3; l++) {
      if (val === puzzle[k][l]) {
        return false;
      }
    }
  }  
  return true;
}

function sudokuSolver(puzzle, i, j) {
  if (i === 9) {
    i = 0;
    j = j + 1;
    if (j === 9) {
      return true;
    }
  }
    
  if (puzzle[i][j] > 0) {
    return sudokuSolver(puzzle, i+1, j);
  }


  for (var val = 1; val <= 9; val++) {    
    if (legal(puzzle, i, j, val)) {
      puzzle[i][j] = val;
      if (sudokuSolver(puzzle, i+1, j)) {
        return true;
      } 
    }  
  }

  puzzle[i][j] = 0;
  return false;
}

function sudoku(puzzle) {
  if (sudokuSolver(puzzle, 0, 0)) {
    return puzzle;
  }
  return null;
}


sudoku([[5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]])
            
            

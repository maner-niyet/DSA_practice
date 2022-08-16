/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
Problem: https://leetcode.com/problems/valid-sudoku/ 
Explanation: https://www.youtube.com/watch?v=TjFXEUCMqI8&ab_channel=NeetCode*/

//Approach: map
//Time: O(n^2) | Space: O(n^2) 
//but since n = 9, TC & SC is actually O(1) 

const isValidSudoku = board => {
    const rows = {}, 
          cols = {},
          submatrixes = {}; 
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let num = board[row][col];
            if (num === ".") continue;
            if (!rows.hasOwnProperty(row)) {
                rows[row] = new Set();
            }
            if (!cols.hasOwnProperty(col)) {
                cols[col] = new Set();
            }
            const position = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
            if (!submatrixes.hasOwnProperty(position)) {
                submatrixes[position] = new Set();
            }
            if (rows[row].has(num) ||
               cols[col].has(num) ||
               submatrixes[position].has(num)) return false;
            rows[row].add(num);
            cols[col].add(num);
            submatrixes[position].add(num)
        }
    }
    return true;
};
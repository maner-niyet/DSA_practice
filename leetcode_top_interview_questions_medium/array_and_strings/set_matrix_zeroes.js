/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place. */
//Solution 1
// Time: O(m * n * (m + n))
//Space: O(m * n)
//where m = width, n = height of matrix
var setZeroes = function(matrix) {
    const copy = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = [...matrix[i]];
        copy.push(row);
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (copy[i][j] === 0) {
                for (let r = 0; r < matrix.length; r++) {
                    matrix[r][j] = 0;
                }
                
                for (let c = 0; c < matrix[0].length; c++) {
                    matrix[i][c] = 0;
                }
            }
        }
    }
    return matrix;    
};

//Solution 2

var setZeroes = function(matrix) {
    const positions = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                 positions.push([i, j])
            }
        }
    }
    
    for (let position of positions) {
        const [row, col] = position;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (i == row || j === col) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
    return matrix;    
};
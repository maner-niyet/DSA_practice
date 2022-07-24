/* Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix. 

https://leetcode.com/problems/matrix-block-sum/*/

//Solution 1
//Approach - Dynamic Programming, Prefix Sum
//Time: O(N * M) | Space: O(N * M)
var matrixBlockSum = function(mat, k) {
    const sums = Array.from(mat, (row) => Array.from(row));
    
    const rows = mat.length,
          cols = mat[0].length;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            sums[row][col] += 
                (sums[row - 1]?.[col] ?? 0) + 
                (sums[row][col - 1] ?? 0) - 
                (sums[row - 1]?.[col - 1] ?? 0); 
        }
    }
    
    const answer = Array.from(mat, () => new Array(cols).fill(0));
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let top = row - k - 1,
                left = col - k -1,
                right = Math.min(cols - 1, col + k),
                bottom = Math.min(rows - 1, row + k);
            
            answer[row][col] = sums[bottom][right];
            
            if (top >= 0) {
                 answer[row][col] -= sums[top][right];   
            }
            if (left >= 0) {
                answer[row][col] -= sums[bottom][left];
            }
            if (top >= 0 && left >= 0) {
                answer[row][col] += sums[top][left]
            }
        }
    }
    return answer;
};
/* You are given a 2D array of potentially unequal height and width that's filled with integers. You are also given a positive integer size. Write a function that return the mazimum sum that can be generate from a submatrix with dimentions size* size */

//Approach: DP
//Time: O(n * m) | Space: O(n * m)

const maximumSumSubmatrix = (matrix, size) => {
    const rows = matrix.length,
          cols = matrix[0].length,
          sums = buildSumsArray(matrix, rows, cols);
    let maxSum = -Infinity;
    for (let row = size - 1; row < rows; row++) {
      for (let col = size -1; col < cols; col++) {
        maxSum = Math.max(maxSum, sums[row][col] - 
                                  (sums[row - size]?.[col] ?? 0) - 
                                  (sums[row][col - size] ?? 0) + 
                                  (sums[row - size]?.[col - size] ?? 0))
      }
    }
    return maxSum
}
  
const buildSumsArray = (matrix, rows, cols) => {
    const sums = Array.from(matrix);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        sums[row][col] += (sums[row - 1]?.[col] ?? 0) + 
                      (sums[row][col - 1] ?? 0) - 
                      (sums[row - 1]?.[col - 1] ?? 0);
      }
    }
    return sums;
 }
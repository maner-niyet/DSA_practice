/* There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

https://leetcode.com/problems/unique-paths/ */

//Approach: DP, top down
//Time: O(n * m) | Space: O(n * m)

const uniquePaths = (m, n) => {
    if (m === 1 || n === 1) return 1;
    const matrix = buildMatrix(m, n);
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
        }
    }
    return matrix[m - 1][n - 1];
};

const buildMatrix = (m, n) => {
    const matrix = Array(m).fill(0).map(el => Array(n).fill(1));
    matrix[0][0] = 0;
    return matrix;
}
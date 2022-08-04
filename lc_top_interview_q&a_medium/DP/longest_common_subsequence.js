/* Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
https://leetcode.com/problems/longest-common-subsequence/*/

//Solution 1
//Approach: DP
//Time: O(n * m) | Space: O(n * m) where n and m is text1.length and text2.length
const longestCommonSubsequence = (text1, text2) => {
    if (!text1.length || !text2.length) return 0;
    const matrix = buildMatrix(text1, text2);
    
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (text1[row - 1] === text2[col - 1]) {
                matrix[row][col] = 1 + matrix[row - 1][col - 1];
            } else {
                matrix[row][col] = Math.max(matrix[row][col - 1], matrix[row - 1][col])
            }
        }
    }
    return matrix[text1.length][text2.length];
};

const buildMatrix = (text1, text2) => {
    const matrix = [];
    for (let i = 0; i < text1.length + 1; i++) {
        const row = Array(text2.length + 1).fill(0);
        matrix.push(row);
    }
    return matrix;
}
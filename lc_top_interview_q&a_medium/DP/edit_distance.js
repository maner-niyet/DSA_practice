/* Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character */

//Solution 1
//Approach: DP
//Time: O(n * m) | Space: O(n * m) 
//where n is word1.length, n is word2.length
const minDistance = (word1, word2) => {
    if (!word1.length) return word2.length;
    if (!word2.length) return word1.length;
    const matrix = buildMatrix(word1, word2);
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (word1[row - 1] === word2[col - 1]) {
                matrix[row][col] = matrix[row - 1][col - 1]
            } else {
                matrix[row][col] = 1 + Math.min(matrix[row - 1][col - 1], 
                                                matrix[row - 1][col], 
                                                matrix[row][col - 1]);
            }
        }
    }
    return matrix[word1.length][word2.length];
};

const buildMatrix = (word1, word2) => {
    const matrix = [];
    for (let i = 0; i < word1.length + 1; i++) {
        const row = Array(word2.length + 1).fill(0);
        row[0] = i;
        matrix.push(row);
    }
    for (let j = 0; j < word2.length + 1; j++) {
        matrix[0][j] = j;
    }
    return matrix;
}
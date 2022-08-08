/* Write a function that takes in an array of integers and returns the largest possible value for the expression array[a] - array[b] + array[c] - array[d], where a, b, c, d are indices of the array and a < b < c < d.
If the input array has fewer than 4 elements, you function should return 0. */

//Approach: DP
//Time: O(n) | Space: O(n)
const maximizeExpression = (array) => {
    const n = array.length;
    if (n < 4) return 0;
    const maxA = [array[0]];
    for (let i = 1; i < n; i++) {
        maxA[i] = Math.max(maxA[i - 1], array[i]);
    }
    const maxAMinusB = Array(n).fill(-Infinity);
    for (let i = 1; i < n; i++) {
        maxAMinusB[i] = Math.max(maxAMinusB[i - 1], maxA[i - 1] - array[i]);
    }
    const maxAMinusBPlusC = Array(n).fill(-Infinity);
    for (let i = 2; i < n; i++) {
        maxAMinusBPlusC[i] = Math.max(maxAMinusBPlusC[i - 1], maxAMinusB[i - 1] + array[i])
    }

    const maxAMinusBPlusCMinusD = Array(n).fill(-Infinity);
    for (let i = 3; i < n; i++) {
        maxAMinusBPlusCMinusD[i] = Math.max(maxAMinusBPlusCMinusD[i - 1], maxAMinusBPlusC[i - 1] - array[i])
    }

    return maxAMinusBPlusCMinusD[n - 1];
}
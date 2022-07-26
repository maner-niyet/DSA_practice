/* You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
Each answer[i] is calculated considering the initial state of the boxes. https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/*/
//Solution 1
//Time: O(n^2) | Space: O(n)
var minOperations = function(boxes) {
    const indexes = [];
    for (const i in boxes) {
        if (boxes[i] === "1") indexes.push(i);
    }
    const answer = [];
    for (const i in boxes) {
        let moves = 0;
        for (const index of indexes) {
            moves+= Math.abs(i - index);
        }
        answer.push(moves)
    }
    return answer
};

//Solution 2
//Approach: Dynamic Programming, iterative
//Time: O(n) | Space: O(n)
var minOperations = function(boxes) {
    let output = [];
    // Left to right
    let oneCount = 0, total = 0;
    for (let l = 0; l < boxes.length; l++) {
        output[l] = total;
        if (boxes[l] === '1') oneCount++;
        total += oneCount;
    }
    // Right to left
    oneCount = 0, total = 0;
    for (let r = boxes.length - 1; r >= 0; r--) {
        output[r] += total;
        if (boxes[r] === '1') oneCount++;
        total += oneCount;
    }
    return output;
};
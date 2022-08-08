/* Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows:
Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.

You should perform the cuts in order, you can change the order of the cuts as you wish.

The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation.

Return the minimum total cost of the cuts.
https://leetcode.com/problems/minimum-cost-to-cut-a-stick/ */
//Solution 1
//Approach: recursion
//Time: exponential
var minCost = function(n, cuts) {
    let cutsLen = cuts.length;
    cuts.sort((a, b) => a - b);
    cuts.unshift(0);
    cuts.push(n);
    
    return f(1, cutsLen, cuts);
};

function f(start, end, cuts) {
    if (start > end) return 0;
    let minCost = Infinity;
    for (let i = start; i <= end; i++) {
        let cost = (cuts[end + 1] - cuts[start - 1]) + 
                f(start, i - 1, cuts) + 
                f(i + 1, end, cuts);
        minCost = Math.min(minCost, cost);
    }
    return minCost;
}

//Solution 2
//Approach: recursion & memoization
//Time: O(m^3) | Space: O(m^2) + stack space from recursion;
var minCost = function(n, cuts) {
    let cutsLen = cuts.length;
    cuts.sort((a, b) => a - b);
    cuts.unshift(0);
    cuts.push(n);
    const dp = Array(cutsLen + 1).fill(0)
                                .map(el => Array(cutsLen + 1)
                                .fill(-1));
    return f(1, cutsLen, cuts, dp);
};

function f(start, end, cuts, dp) {
    if (start > end) return 0;
    if (dp[start][end] !== -1) return dp[start][end];
    let minCost = Infinity;
    for (let i = start; i <= end; i++) {
        let cost = (cuts[end + 1] - cuts[start - 1]) + 
                f(start, i - 1, cuts, dp) + 
                f(i + 1, end, cuts, dp);
        minCost = Math.min(minCost, cost);
    }
    return dp[start][end] = minCost;
}

//Solution 3
//Approach: bottom up
//Time: O(m^3) | Space: O(m^2)
var minCost = function(n, cuts) {
    let cutsLen = cuts.length;
    cuts.sort((a, b) => a - b);
    cuts.unshift(0);
    cuts.push(n);
    const dp = Array(cutsLen + 2).fill(0)
                                .map(el => Array(cutsLen + 2)
                                .fill(0));
    for (let i = cutsLen; i >= 1; i--) {
        for (let j = 1; j <= cutsLen; j++) {
            if (i > j) continue;
            let minCost = Infinity;
            for (let idx = i; idx <= j; idx++) {
                let cost = (cuts[j + 1] - cuts[i - 1]) + 
                        dp[i][idx - 1] + 
                        dp[idx + 1][j];
                minCost = Math.min(minCost, cost);
            }
            dp[i][j] = minCost;
        }
    }
    return dp[1][cutsLen];
};

//Solution 4
//Approach: recursion + memoization
//Time: O(m^3) | Space: O(m^2)
var minCost = function(n, cuts) {
    const dp = Array(cuts.length + 1).fill(0).map(el => Array(cuts.length +1).fill(-1));
    cuts.sort((a, b) => a- b);
    const solve = (startStick, endStick, left, right) => {
        if (left > right) return 0;
        let cost = Infinity;
        if (dp[left][right] > -1) return dp[left][right];
        for (let i = left; i <=right; i++) {
            let leftCost = solve(startStick, cuts[i], left, i - 1);
            let rightCost = solve(cuts[i], endStick, i + 1, right);
            let currentCost = endStick - startStick + leftCost + rightCost;
            cost = Math.min(cost, currentCost)
        }
        return dp[left][right] = cost;
    }
    return solve(0, n, 0, cuts.length - 1)
};

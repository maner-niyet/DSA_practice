/* Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
https://leetcode.com/problems/longest-increasing-subsequence/ */
//Solution 1
//Approach: DP
//Time: O(n^2) | Space: O(n)

var lengthOfLIS = function(nums) {
    const LIS = Array(nums.length).fill(1);
    for(let i = nums.length - 1; i >= 0; i--) {
        let currentNum = nums[i];
        for (let j = i; j < nums.length; j++) {
            let otherNum = nums[j];
            if (currentNum < otherNum) {
                LIS[i] = Math.max(1 + LIS[j], LIS[i])
            } 
        }
    }
    return Math.max(...LIS)
};
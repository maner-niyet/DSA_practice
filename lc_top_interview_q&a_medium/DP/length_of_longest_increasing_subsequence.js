/* Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
https://leetcode.com/problems/longest-increasing-subsequence/ */
//Solution 1
//Approach: DP
//Time: O(n^2) | Space: O(n)

const lengthOfLIS = nums => {
    const maxLengths = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        let currentNum = nums[i];
        for (let j = 0; j < i; j++) {
            let otherNum = nums[j];
            if (currentNum > otherNum) {
                maxLengths[i] = Math.max(maxLengths[i], maxLengths[j] + 1);
            }
        }
    }
    return Math.max(...maxLengths)
};

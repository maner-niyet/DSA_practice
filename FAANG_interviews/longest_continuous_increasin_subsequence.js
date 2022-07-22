/* Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

https://leetcode.com/problems/longest-continuous-increasing-subsequence/  */

//Approach: Sliding Window
//Time: O(n) | Space: O(1)

//Solution 1
var findLengthOfLCIS = function(nums) {
    if (nums.length == 1) return 1;
    
    let start = 0;
    let count = 1;
    let result = 0;
    for (let end = 1; end < nums.length; end++) {
        if (nums[end - 1] < nums[end]) {
            count++;
        } else {
            result = Math.max(result, count);
            count = 1;
            start = end + 1;
        }
    }
    return result > count ? result : count;
};

//Solution 2
const findLengthOfLCIS = nums => {
    let answer = anchor = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i-1] >= nums[i]) anchor = i
        answer = Math.max(answer, i - anchor + 1)
    }
    return answer
}
        


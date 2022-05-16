/*
1. Two Sum
https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const twoSum = (nums, target) => {
    const obj = {};
    let comp;
    
    for (let i = 0; i < nums.length; i++) {
        comp = target - nums[i];
        if (!obj.hasOwnProperty(comp)) {
            obj[nums[i]] = i;
        } else {
            return [obj[comp], i]
        }
    }
};
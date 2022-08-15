/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
https://leetcode.com/problems/two-sum/
 */

//Solution 1
//Approach: Naive Linear Linear
//Time: O(n^2) | Space: O(1)
const twoSum = (nums, target) => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] + nums[j] === target) return [j, i]
        }
    }
};

//Solution 2
//Approach: Hash Map
//Time: O(n) | Space: O(n)
const twoSumMap = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let compNum = target - currentNum;
        if (compNum in map) {
            return [map[compNum], i]
        } else {
            map[currentNum] = i;
        }
    }
};
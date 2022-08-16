/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
Problem: https://leetcode.com/problems/longest-consecutive-sequence/ */

//Solution 1
//Approach: Map
//Time: O(n) | Space: O(n)
const longestConsecutive = nums => {
    if (nums.length < 2) return nums.length;
    let maxLength = 1;
    const map = {};
    for (const num of nums) map[num] = -1;
    for (const num of nums) {
        let currentNum = num - 1;
        let currentLength = 1;
        
        while (map.hasOwnProperty(currentNum) && map[currentNum] === -1) {
            currentLength++;
            map[currentNum] = 1;
            currentNum--;
        }
        currentNum = num + 1;
        while (map.hasOwnProperty(currentNum) && map[currentNum] === -1) {
            currentLength++;
            map[currentNum] = 1;
            currentNum++;
        }
        maxLength = Math.max(maxLength, currentLength)
    }
    return maxLength;
};

//Solution 2
//Approach: Set
//Time: O(n) | Space: O(n)
const longestConsecutive1 = nums => {
    let maxLength = 0;
    const set = new Set(nums);
    for (const num of nums) {
        if (set.has(num - 1)) continue;
        let currentLength = 0;
        while (set.has(num + currentLength)) currentLength++;
        maxLength = Math.max(maxLength, currentLength)
    }
    return maxLength;
};
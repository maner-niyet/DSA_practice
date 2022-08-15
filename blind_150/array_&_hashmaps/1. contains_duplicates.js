/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 
https://leetcode.com/problems/contains-duplicate/*/

//Solution 1
//Approach: Naive Linear Search
//Time: O(n^2) | Space: O(1)
const containsDuplicateLinear = nums => {
    if (nums.length === 1) return false;
    const hasDuplicate = true;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) { 
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) return hasDuplicate;
        }
    }
    return !hasDuplicate;  
};

//Solution 2
//Approach: Sorting
//Time: O(nlogn) | Space: O(1)
const containsDuplicateSorting = nums => {
    if (nums.length === 1) return false;
    const hasDuplicate = true;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) { 
        if (nums[i] === nums[i + 1]) return hasDuplicate;
    }
    return !hasDuplicate;  
};

//Solution 3
//Approach: Hash Map
//Time: O(n) | Space: O(n)
const containsDuplicateMap = nums => {
    if (nums.length === 1) return false;
    const hasDuplicate = true;
    const map = {};
    for (const num of nums) { 
        if (!map.hasOwnProperty(num)) {
            map[num] = true;
        } else {
            return hasDuplicate;
        } 
    }
    return !hasDuplicate;  
};
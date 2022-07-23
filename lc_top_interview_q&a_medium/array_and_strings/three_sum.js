/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets. */

//Time: O(n * logn) 
//Space: O(n) 
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let target = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = target + nums[left] + nums[right]
           
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([target, nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                while(nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
};
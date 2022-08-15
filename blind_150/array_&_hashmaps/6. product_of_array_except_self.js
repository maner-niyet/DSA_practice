/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
https://leetcode.com/problems/product-of-array-except-self/ */

//Solution 1
//Approach: dp, arrays
//Time: O(n) | Space: O(n)
const productExceptSelf = (nums) => {
    const leftToRight = nums.map(el => 1);
    const rightToLeft = nums.map(el => 1);
    
    for (let i = 1; i < nums.length; i++) {
        leftToRight[i] = leftToRight[i - 1] * nums[i - 1];
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
        rightToLeft[i] = rightToLeft[i + 1] * nums[i + 1]
    }
    return leftToRight.map((el, index) => el * rightToLeft[index]);
};

//Solution 1
//Approach: dp
//Time: O(n) | Space: O(1)
const productExceptSelf1 = (nums) => {
    const result = Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i]
    }
    let postFix = 1; 
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postFix;
        postFix *= nums[i];
    }
    return result;
};
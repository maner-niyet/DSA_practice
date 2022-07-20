/* Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
*/

//Solution 1
//Time: O(n) | Space: O(1)
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for (let i= 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i]
        } else if (nums[i] <= second) {
            second = nums[i]
        } else {
            return true;
        }
    }
    return false;
};
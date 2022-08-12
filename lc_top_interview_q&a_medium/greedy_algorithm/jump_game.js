/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
https://leetcode.com/problems/jump-game/
*/

//Approach: Greedy
//Time: O(n) | Space: O(1)
const canJump = nums => {
    let goal = nums.length -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};

//Approach: DP
//Time: O(n) | Space: O(1)
const canJump1 = nums => {
    let canReach = 0;
    for (let i = 0; i <= canReach; i++) {
        if (i === nums.length - 1) {
            return true
        }
        canReach = Math.max(canReach, nums[i] + i)
    }
    return false;
};
/* You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b

Example:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]  

https://leetcode.com/problems/missing-ranges/*/

//Solution 1
//Time: O(n) | Space: O(n)
var findMissingRanges = function(nums, lower, upper) {
    const output = [];
    let prev = lower - 1;
    let range;
    let current;
    for (let i = 0; i <= nums.length; i++) {
        current = (i < nums.length) ? nums[i] : upper + 1
        if (prev + 1 <= current - 1) {
            output.push(formatRange(prev + 1, current - 1))
        }
        prev = current;
    }
    return output;
};

function formatRange(lower, upper) {
    if (lower === upper) {
        return String(lower);
    } else {
        return `${lower}->${upper}`;
    }
}
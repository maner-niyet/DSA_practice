/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Problem: https://leetcode.com/problems/trapping-rain-water/ */

//Solution 1
//Approach: DP
//Time: O(n) | Space: O(n)
const trap = height => {
    const maxes = height.map(el => 0);
    let n = height.length, 
        maxHeight = height[0];
    for (let i = 1; i < n - 1; i++) {
        if (maxHeight <= height[i]) {
            maxes[i] = 0;
            maxHeight = height[i];
        } else {
            maxes[i] = maxHeight - height[i];
        }
    }
    maxHeight = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (maxHeight <= height[i]) {
            maxes[i] = 0;
            maxHeight = height[i];
        } else {
            maxes[i] = Math.min(maxHeight - height[i], maxes[i]);
        }
    }
    return maxes.reduce((a, b) => a + b, 0);
};

//Solution 2
//Approach: DP, two pointers
//Time: O(n) | Space: O(1)
const trap1 = height => {
    let waterArea = 0,
        left = 0,
        right = height.length - 1,
        leftMax = height[left],
        rightMax = height[right];
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            waterArea += leftMax - height[left]
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            waterArea += rightMax - height[right]; 
        }
    }
    return waterArea;
};
/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

https://leetcode.com/problems/trapping-rain-water/*/

//Solution 1
//Approach: DP
//Time: O(n) | Space: O(n)
const trap = (height) => {
    const n = height.length;
    if (n <= 2) return 0;
    const maxes = Array(n).fill(0);
    let currentMax = height[0];
    for (let i = 1; i < n - 1; i++) {
      if (currentMax > height[i]) {
        maxes[i] = currentMax - height[i];
      } else {
        currentMax = height[i];
        maxes[i] = 0;
      }
    }
    currentMax = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      if (currentMax > height[i]) {
        maxes[i] = Math.min(currentMax - height[i], maxes[i])
      } else {
        currentMax = height[i];
        maxes[i] = 0;
      }
    }
    const maxWaterTrapped = maxes.reduce((a, b) => a + b, 0)
    return maxWaterTrapped;   
};

//Solution 2
//Approach: DP, two pointer
//Time: O(n) | Space: O(1)
const trap1 = height => {
    let leftIdx = 0, 
        rightIdx = height.length - 1,
        surfaceArea = 0,
        leftMax = height[leftIdx],
        rightMax = height[rightIdx];
  
    while (leftIdx < rightIdx) {
      if (height[leftIdx] < height[rightIdx]) {
        leftIdx++;
        leftMax = Math.max(leftMax, height[leftIdx]);
        surfaceArea += leftMax - height[leftIdx];
      } else {
        rightIdx--;
        rightMax = Math.max(rightMax, height[rightIdx]);
        surfaceArea += rightMax - height[rightIdx]; 
      }
    }
    return surfaceArea;
}
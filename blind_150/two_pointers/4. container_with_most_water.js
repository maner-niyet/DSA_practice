
//Solution 1
//Approach: Brute Force, Two Pointers, Nested Loops
//Time: O(n^2) | Space: O(1)
const maxArea = height => {
    let maxWaterArea = 0;
    const n = height.length;
    for (let left = 0; left < n; left++) {
        for (let right = left + 1; right < n; right++) {
            let currentWaterArea = Math.min(height[right], height[left]) * 
                (right - left);
            maxWaterArea = Math.max(maxWaterArea, currentWaterArea);
        }
    }
    return maxWaterArea;
};

//Solution 2
//Approach: Two Pointers
//Time: O(n) | Space: O(1)
const maxArea1 = height => {
    let max = 0, 
        left = 0, 
        right = height.length - 1;
    while (left < right) {
        let current = Math.min(height[right], height[left]) * (right - left);
        max = Math.max(max, current);
        height[left] < height[right] ? left++ : right--;
    }
    return max;
}
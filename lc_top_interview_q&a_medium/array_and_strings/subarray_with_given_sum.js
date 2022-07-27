/* Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

In case of multiple subarrays, return the subarray which comes first on moving from left to right. */

//Approach: Sliding Window
//Time: O(n) | Space: O(1)

function subarraySum(arr, n, s) {
    let start = 0;
    let runningSum = arr[0];
    for (let end = 1; end <= n; end++) {
        while(runningSum > s && start < end - 1) {
            runningSum -= arr[start];
            start++
        }
        if (runningSum === s) return [start + 1, end];
        if (end < n) {
            runningSum += arr[end];
        }
    }
    return [-1]
}

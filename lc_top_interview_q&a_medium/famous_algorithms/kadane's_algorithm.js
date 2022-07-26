/* Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum. */

//Approach: DP, Kadane's Algorithm
//Time: O(n) | Space: O(1)

function maxSubarraySum(arr, N){
    if (arr.length === 1) return arr[0]; 
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
} 
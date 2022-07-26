/* Given an array of N integers arr[] where each element represents the max length of the jump that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array. */

//Solution 1
//Approach: DP
//Time: O(n^2) | Space: O(n)
function minJumps(arr,n){
    if (arr.length === 1) return 0;
    if (arr[0] == 0) return -1;
    const jumps = Array(arr.length).fill(Infinity);
    jumps[0] = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] + j >= i) {
                jumps[i] = Math.min(jumps[j] + 1, jumps[i])
            }
        }
    }
    return jumps[jumps.length - 1] === Infinity ?  
                        -1 : jumps[jumps.length - 1]
} 

//Solution 2
//Approach: DP
//Time: O(n) | Space: O(1)
function  minJumps(arr,n){
    if (arr.length === 1) return 0;
    if (arr[0] == 0) return -1;
    let jumps = 1;
    let steps = arr[0];
    let maxReach = arr[0];
    for (let i = 1; i < n; i++) {
        if (i == n -1) return jumps;
        steps--;
        maxReach = Math.max(maxReach, arr[i] + i);
        if (steps == 0) {
            jumps++;
            if (i >= maxReach) return -1;
            steps = maxReach - i;
        }
    }
    return -1;
}

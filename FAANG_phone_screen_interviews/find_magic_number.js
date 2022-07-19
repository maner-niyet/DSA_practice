/*https://leetcode.com/problems/smallest-index-with-equal-value/ 
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that return the lowest index i for which 
arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness. 

Examples: 
input: arr = [-8, 0, 2, 5]
output: 2 => since arr[2] == 2

input: arr = [-1, 0, 3, 6]
output: -1 => since no index in array satisfies condition

input: arr = [0, 1, 2, 3]
output: 0 => since 0 is the lowest that satisfies condition
*/

//Solution 1
//Approach: Iteration
//Time: O(n) | Space: O(1)

function indexEqualsValueSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == i) return i;
    }
    return -1;
}

//Solution 2
//Approach: Binary Search
//Time: O(logn) | Space: O(1)

function indexEqualsValueSearch(arr) {
    let start = 0,
        end = arr.length - 1,
        answer = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid === arr[mid]) {
            answer = mid;
            end = mid - 1; 
        } else if (mid > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return answer;
}



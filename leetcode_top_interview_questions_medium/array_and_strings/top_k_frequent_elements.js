/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. */

//Solution 1
//Approach: Using hash map or JS object
//Time: O(nlogn)
//Space: O(n)
var topKFrequent = function(nums, k) {
    const map = {};
    for (let num of nums) {
        if (num in map) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    const array = []; 
    for (let key in map) {
        array.push([key, map[key]]);
    }
    return array.sort((a, b) => a[1] - b[1]).slice(array.length - k).map(el => el[0])
};

//Solution 2 
//Approach: B?ucket Sort 
//Time: O(n) | Space: O(n)

var topKFrequent = function(nums, k) {
    const map = {};
    const frequencies  = [];
    for (let i = 0; i <= nums.length; i++) {
        frequencies.push([]);
    }
    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }

    for (let [key, value] of Object.entries(map)) {
        frequencies[value].push(key); 
    }
  
    const result = [];
    for (let i = frequencies.length - 1; i >= 0; i--) {
        for (let num of frequencies[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }
};
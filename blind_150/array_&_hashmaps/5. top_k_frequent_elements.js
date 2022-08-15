/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
https://leetcode.com/problems/top-k-frequent-elements/ */

//Solution 1
//Approach: map, sorting
//Time: O(nlogn) | Space: O(n)
const topKFrequent = (nums, k) => {
    const numFreqCount = getNumFreqCount(nums);
    const sortedPairs = sortNumFreqCount(numFreqCount);
    let size = sortedPairs.length;
    return sortedPairs.slice(size - k).map(el=> el[0]);
};

const sortNumFreqCount = numFreqCount => {
    const pairs = Object.entries(numFreqCount);
    pairs.sort((a, b) => a[1] - b[1]);
    return pairs;
};

const getNumFreqCount = nums => {
    const numFreqCount = {};
    for (const num of nums) {
        numFreqCount[num] ? numFreqCount[num]++ : numFreqCount[num] = 1;
    }
    return numFreqCount;
}

//Solution 2
//Approach: map, bucket sort
//Time: O(n) | Space: O(n)
const topKFrequent1 = (nums, k) => {
    const bucket = getBucket(nums);
    const numFreqCount = getNumFreqCount1(nums);
    fillBucket(bucket, numFreqCount);
    const result = getResult(bucket, k);
    return result;
};

const getBucket = nums => {
    const bucket = [];
    for (let i = 0; i <= nums.length; i++) {
        bucket.push([]);
    }
    return bucket;
}

const getNumFreqCount1 = nums => {
    const map = {};
    for (const num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }
    return map;
}

const fillBucket = (bucket, numFreqCount) => {
    for (const [key, value] of Object.entries(numFreqCount)) {
        bucket[value].push(key);
    }
};

const getResult = (bucket, k) => {
    let result = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        result.push(...bucket[i]);
        if (result.length === k) return result;
    }
}

 

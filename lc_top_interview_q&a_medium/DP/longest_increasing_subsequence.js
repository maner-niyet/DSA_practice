/* Given a non-empty array of integers, write a function that returns the longest strictly-increasing subsequence in the array.
A subsequence of an array is the set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3 ,4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array. 
You can assume that there will only be one longest increasing subsequence. */

//Solution 1
//Approach: DP
//Time: O(n^2) | Space: O(n)
const longestIncreasingSubsequence = array => {
    if (array.length === 1) return array;;
    const len = array.length,
        LIS = Array(len).fill(1),
        sequences = Array(len).fill(null);
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j] && LIS[i] < LIS[j] + 1) {
            LIS[i] = LIS[j] + 1;
            sequences[i] = j;
        }
      }
    }
    const maxIdx = LIS.indexOf(Math.max(...LIS));
    return buildSequence(array, sequences, maxIdx);
}
  
const buildSequence = (array, sequences, maxIdx) => {
    const sequence = [];
    while (maxIdx !== null) {
      sequence.push(array[maxIdx]);
      maxIdx = sequences[maxIdx]
    }
    return sequence.reverse();
}

//Solution 2
//Approach: DP, binary search
//Time: O(n*logn) | Space: O(n)
const longestIncreasingSubsequence1 = array => {
    if (array.length === 1) return array;;
    const len = array.length,
          indices = Array(len + 1),
          sequences = Array(len);
    let maxLength = 0;
    for (let i = 0; i < len; i++) {
      const num = array[i];
      const newLength = binarySearch(1, maxLength, indices, array, num);
      sequences[i] = indices[newLength - 1];
      indices[newLength] = i;
      maxLength = Math.max(maxLength, newLength);
    }
    return buildSequence(array, sequences, indices[maxLength]);
  }
  
  const binarySearch1 = (startIdx, endIdx, indices, array, num) => {
    if (startIdx > endIdx) return startIdx;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (array[indices[midIdx]] < num) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
    return binarySearch(startIdx, endIdx, indices, array, num);
  }
  
  const buildSequence1 = (array, sequences, maxIdx) => {
    const sequence = [];
    while (maxIdx !== undefined) {
      sequence.push(array[maxIdx]);
      maxIdx = sequences[maxIdx];
    }
    return sequence.reverse();
  }
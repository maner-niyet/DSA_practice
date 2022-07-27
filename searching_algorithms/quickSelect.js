//Approach: Quick Select
//Best: Time O(n) | Space: O(1)
//Average: Time O(n) | Space: O(1)
//Worst: Time O(n^2) | Space: O(1)
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    function swap(left, right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
    function quickSelectHelper(left, right) {
        let pivotElement = nums[right], partitionIdx = left;
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivotElement) {
                swap(partitionIdx, i);
                partitionIdx++;
            }
        }
        swap(partitionIdx, right);
        if (partitionIdx > k) {
            return quickSelectHelper(left, partitionIdx - 1);
        } else if (partitionIdx < k) {
            return quickSelectHelper(partitionIdx + 1, right);
        } else {
            return nums[partitionIdx];
        }
    }
    return quickSelectHelper(0, nums.length - 1);
};


function findKthSmallest(array, k) {
    const position = k - 1;
    function quickselectHelper(startIdx, endIdx) {
      while (true) {
        if (startIdx > endIdx) {
          throw new Error("algo shoudl never arrive here")
        }
        const pivotIdx = startIdx;
        let leftIdx = startIdx + 1;
        let rightIdx = endIdx;
        while (leftIdx <= rightIdx) {
          if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx);
          }
          if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx++
          }
          if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx--;
          }
        }
        swap(pivotIdx, rightIdx);
        if (rightIdx === position) {
          return array[rightIdx]
        } else if (rightIdx < position) {
          startIdx = rightIdx + 1;
        } else {
          endIdx = rightIdx -1;
        }
      }
    }
    function swap(left, right) {
          let temp = array[left];
          array[left] = array[right];
          array[right] = temp;
    }
    return quickselectHelper(0, array.length -1)
  }

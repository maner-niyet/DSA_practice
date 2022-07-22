


//Approach: Sliding Window
//Time: O(n) | Space: O(1)

//Solution 1
var findLengthOfLCIS = function(nums) {
    if (nums.length == 1) return 1;
    
    let start = 0;
    let count = 1;
    let result = 0;
    for (let end = 1; end < nums.length; end++) {
        if (nums[end - 1] < nums[end]) {
            count++;
        } else {
            result = Math.max(result, count);
            count = 1;
            start = end + 1;
        }
    }
    return result > count ? result : count;
};

//Solution 2
const findLengthOfLCIS = nums => {
    let answer = anchor = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i-1] >= nums[i]) anchor = i
        answer = Math.max(answer, i - anchor + 1)
    }
    return answer
}
        


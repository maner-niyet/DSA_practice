/* Given a string s, find the length of the longest substring without repeating characters. */

//Solution 1
// Sliding window pattern used
//Time: O(N) where N is s.length
//Space: O (N) 

var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let end = 0,
        maxLength = 0;
    
    for (let start = 0; start < s.length ; start++) {
        while (set.has(s[start])) {
            set.delete(s[end]);
            end++
        }
        set.add(s[start]);
        maxLength = Math.max(maxLength, start - end + 1);
    }
    return maxLength;
};
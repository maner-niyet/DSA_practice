/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

//Solution 1
//Time : O(N^2 * M) where N is strs.length, M is str.length
//Space: O(N * M)
var groupAnagrams = function(strs) {
    const result = [];
    for (let i = 0; i < strs.length; i++) {
        let current = strs[i];
        if (current === 0) continue;
        const currentGroup = [current];
        
        for (let j = i + 1; j < strs.length; j++) {
            let other = strs[j];
            if (other === 0) continue;
            
            if (isAnagram(current, other)) {
                currentGroup.push(other);
                strs[j] = 0;
            } else {
                continue;
            }
        }
        result.push(currentGroup);
    }
    return result;
};

const isAnagram = (str1, str2) => {
    if (str1.length == 0 && str2.length == 0) return true;
    if (str1.length !== str2.length) return false;
    const charCounts = {};
    for (let char of str1) {
        if (char in charCounts) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }
    for (let char of str2) {
        if (!(char in charCounts)) return false;
        charCounts[char]--;
    }
    return Object.values(charCounts).every(value => value === 0)
}

//Solution 2
//Time : O(N * M) where N is strs.length, M is str.length
//Space: O(N * M)
var groupAnagrams = function(strs) {
    const map = {};
    for (let string of strs) {
        const charCount = new Array(26).fill(0);
        for (let j = 0; j < string.length; j++) {
            let charIndex = string.charCodeAt(j) - 97;
            charCount[charIndex]+=1;
        }
        console.log(charCount)
        map[charCount] ? map[charCount].push(string) : map[charCount] = [string]
    }
    return Object.values(map);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])

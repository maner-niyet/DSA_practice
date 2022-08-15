/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
https://leetcode.com/problems/group-anagrams/ */

//Approach: Hash Map
//Time: O(n * m) | Space: O(n * m)
//where n is strs.length, m is str.length
const groupAnagrams = strs => {
    const groups = {};
    for (const str of strs) {
        const charCount = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            const charIdx = str.charCodeAt(i) - 97;
            charCount[charIdx]++;
        }
        groups[charCount] ? groups[charCount].push(str) : groups[charCount] = [str]; 
    }
    return Object.values(groups);
}
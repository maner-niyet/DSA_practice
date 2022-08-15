/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
https://leetcode.com/problems/valid-anagram/*/

//Approach: Hash Map
//Time: O(n) | Space: O(n)
const isAnagram = (s, t) => {
    if (s.length != t.length) return false;
    const map = mapCharsInS(s);
    for (const char of t) {
        if (!(char in map)) return false;
        map[char]--;
    }
    const isEveryValueInMapEqualsZero = Object.values(map).every(el => el === 0);
    return isEveryValueInMapEqualsZero
};

const mapCharsInS = string => {
    const map = {};
    for (const char of string) {
        if (char in  map) {
            map[char]++;
        } else{
            map[char] = 1;
        }
    }
    return map;
}
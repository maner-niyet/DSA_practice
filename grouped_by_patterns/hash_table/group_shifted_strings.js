/* We can shift a string by shifting each of its letters to its successive letter.

For example, "abc" can be shifted to be "bcd".
We can keep shifting the string to form a sequence.

For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

https://leetcode.com/problems/group-shifted-strings/ */

//Approach: Hash Table
//Time: O(n * m) | Space: O(n * m) 
//where n is number of strings, m is number chars
const groupStrings = strings => {  
    const map = {};
    for (const string of strings) {
        let hash = getHash(string);
        if (!map.hasOwnProperty(hash)) {
            map[hash] = [];
        } 
        map[hash].push(string);
    }
    return Object.values(map);
};

const getHash = (string = "") => {
    let base = string.charCodeAt(0);
    let hash = "0";
    for (let i = 1; i < string.length; i++) {
        let diff = string.charCodeAt(i) - base;
        if (diff < 0) {
            diff += 26;
        }
        hash = hash + "-" + diff;
    }
    return hash;
}
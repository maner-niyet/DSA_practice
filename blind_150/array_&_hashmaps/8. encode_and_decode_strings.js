/* Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
Machine 1 (sender) has the function:
string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:
string encoded_string = encode(strs);
and Machine 2 does:
vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.
Implement the encode and decode methods. 
Problem: https://leetcode.com/problems/encode-and-decode-strings/ 
Explanation: https://www.youtube.com/watch?v=B1k_sxOSgv8&ab_channel=NeetCode*/

//Solution 1
//TC: O(n) | SC: O(n)
const encode = strs => {
    const separator = "_";
    let result = "";
    for (const str of strs) {
        let length = str.length;
        result += length + separator + str;
    }
    return result;
};

const decode = s => {
    const result = [];
    let leftIdx = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "_") {
            let numOfChars = Number(s.slice(leftIdx, i));
            let word = s.slice(i + 1, i + numOfChars + 1);
            result.push(word);
            i = i + numOfChars;
            leftIdx = i + 1;
        }
    }
    return result;
};

//Solution 2
////TC: O(n) | SC: O(n)
const encode1 = strs => {
    const separator = "_";
    const result = strs.map(str => `${str.length}${separator}${str}`).join("");
    return result;
};

const decode1 = s => {
    const result = [];
    let i = 0;
    while (i < s.length) {
        let leftIdx = i;
        while (s[i] !== "_") {
            i++;
        }
        const len = Number(s.slice(leftIdx, i));
        const word = s.slice(i + 1, i + len + 1);
        result.push(word);
        i = i + len + 1; 
    }
    return result;
};


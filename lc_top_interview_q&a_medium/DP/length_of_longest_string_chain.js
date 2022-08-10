/* You are given an array of words where each word consists of lowercase English letters.

wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

Return the length of the longest possible word chain with words chosen from the given list of words.

https://leetcode.com/problems/longest-string-chain/ */

//Solution 1
//Approach: Hashmap, Recursion, Memoization
//Time: O(n*c^2) | Space: O(n) 
//where n is number of words, c is number of chars in word
// https://www.youtube.com/watch?v=zqe_zIkyVGQ&ab_channel=Errichto
const longestStringChain = words => {
    const map = mapWords(words);
    const edges = words.map(el => []);
    const memo = words.map(el => 0);
    let n = words.length;
    for (let i = 0; i < n; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            let match = word.substring(0, j) + word.substring(j + 1);
            if (!map.hasOwnProperty(match)) continue;
            edges[map[match]].push(i);
        }
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
        answer = Math.max(answer, getLongest(i, edges, memo))
    }
    return answer;
}

const getLongest = (i, edges, memo) => {
    if (memo[i] > 0) return memo[i];
    for (const neighbor of edges[i]) {
        memo[i] = Math.max(memo[i], getLongest(neighbor, edges, memo) + 1);
    }
    return memo[i];
}

const mapWords = words => {
    const map = words.reduce((obj, word, index) => {
        obj[word] = index;
        return obj;
    }, {})
    return map;
}
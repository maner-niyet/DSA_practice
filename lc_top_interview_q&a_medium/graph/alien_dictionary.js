/* There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length. 
https://leetcode.com/problems/alien-dictionary/*/


//Solution 1
//Approach: Topological Sort, DFS, post order traversal
//Time: O(v + e) | Space: O(v + e)
const buildAdjacencyList = words => {
    const adj = {};
    for (const word of words) {
        for (const char of word) {
            if (!(char in adj)) adj[char] = new Set();
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i], word2 = words[i + 1];
        let minLength = Math.min(word1.length, word2.length);

        if (word1.slice(0, minLength) === word2.slice(0, minLength) && 
            word1.length > word2.length) return "";
        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                adj[word1[j]].add(word2[j]);
                break;
            }
        }
    }

    return adj;
}

const alienOrder = words => {
    const adj = buildAdjacencyList(words);
    const visited = {}; // char: true/false
    const result = [];
    function dfs(char) {
        if (visited.hasOwnProperty(char)) return visited[char];
        visited[char] = true;
        for (const neighbor of adj[char]) {
            if (dfs(neighbor)) return true;
        }
        visited[char] = false;
        result.push(char);
    }

    for (const char in adj) {
        if (dfs(char)) return "";
    }

    return result.reverse().join("");
}


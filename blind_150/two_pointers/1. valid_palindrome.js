/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Problem: https://leetcode.com/problems/valid-palindrome/ */

//Approach: Two Pointers
//Time: O(n) | Space: O(1)
const isPalindrome = s => {
    let left = 0;
    let right = s.length -1;
    s = s.toLowerCase();
    while (left < right) {
        while (isNonAlphaNumeric(s[left])) left++;
        while (isNonAlphaNumeric(s[right])) right--;
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};

const isNonAlphaNumeric = char => {
    const isNonAlpha = char < "a" || char > "z";
    const isNonNumeric = char < "0" || char > "9";
    return isNonAlpha && isNonNumeric;
}
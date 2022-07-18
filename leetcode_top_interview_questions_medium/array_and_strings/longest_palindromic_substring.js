/* Given a string s, return the longest palindromic substring in s.*/

//Solution 1
//Approach: Two Pointer Pattern 
//Time: O(N^3) | Space: O(N)
var longestPalindrome = function(s) {
    if (s.length == 1) return s;
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            if ( substring.length > longest.length && isPalindrome(substring)) {
                longest = substring;
            }
        }
    }
    return longest;
};

const isPalindrome = string => {
    let l = 0, r = string.length -1;
    while (l < r) {
        if (string[l] !== string[r]) return false;
        l++;
        r--;
    }
    return true;
}


//Solution 2
//Approach: Two Pointer Pattern  
//Time: O(N^2) | Space: O(N)
var longestPalindrome = function(s) {
    let longest = [0, 1];
    for (let i = 1; i < s.length; i++) {
        let even = getLongestPalindromeFrom(i - 1, i, s);
        let odd = getLongestPalindromeFrom(i - 1, i + 1, s);
        let currentLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; 
        longest = longest[1] - longest[0] >= currentLongest[1] - currentLongest[0] ? longest : currentLongest;
    }
    return s.slice(longest[0], longest[1]);
};

const getLongestPalindromeFrom = (l, r, s) => {
    while (l >= 0 && r < s.length) {
        if (s[l] !== s[r]) break;
        l--;
        r++;
    }
    return [l + 1, r]
}
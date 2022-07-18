/* The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
Given a positive integer n, return the nth term of the count-and-say sequence. */

//Solution 1
//Time: O(n * m) 
var countAndSay = function(n) {
    let result = "1";
    while (n > 1) {
        let current = "";
        for (let i = 0; i < result.length; i++) {
            let count = 1;
            while (result[i] === result[i + 1] && i + 1 < result.length) {
                count++;    
                i++;
            }
            current = current + count + result[i] 
        }
        result = current;
        n--;
    }
    return result;
};
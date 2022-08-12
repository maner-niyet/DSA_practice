/*You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
https://leetcode.com/problems/plus-one/ */

//Time: O(n) | Space: O(n)
//Explanation: https://www.youtube.com/watch?v=uQdy914JRKQ&ab_channel=CSDojo
const plusOne = function(digits) {
    const newDigits = [];
    let carry = 1;
    while (digits.length) {
        let currentNum = digits.pop();
        let total = currentNum + carry;
        if (total === 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        newDigits.unshift(total % 10)
    }
    if (carry === 1) {
        newDigits.unshift(1)
    }
    return newDigits;
};
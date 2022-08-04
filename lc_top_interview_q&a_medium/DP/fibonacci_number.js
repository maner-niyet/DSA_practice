/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
https://leetcode.com/problems/fibonacci-number/  */

//Solution 1
//Approach: Recursion
//Time: O(n) | Space: O(n)
const fib_with_recursion = n => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

//Solution 2
//Approach: DP
//Time: O(n) | Space: O(1)
const fib_with_dp = n => {
    if (n <= 1) return n;
    let first = 0;
    let second = 1;
    let fibNum;
    while (n > 1) {
        fibNum = first + second;
        first = second;
        second = fibNum
        n--;
    }
    return fibNum;
};
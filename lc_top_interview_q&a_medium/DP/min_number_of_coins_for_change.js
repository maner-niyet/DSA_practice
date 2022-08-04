/* You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
https://leetcode.com/problems/coin-change/ */

//Solution 1
//Approach: DP
//Time: O(n * m) | Space: O(m) where n is number of coins, m is amount of money
const coinChange = (coins, amount) => {
    const minCoins = Array(amount + 1).fill(Infinity);
    minCoins[0] = 0;
    
    for (const coin of coins) {
        for (let a = 0; a < amount + 1; a++) {
            if (coin <= a) {
                minCoins[a] = Math.min(minCoins[a], 1 + minCoins[a - coin])
            }
        }
    }
    return minCoins[amount] === Infinity ? -1 : minCoins[amount];
}
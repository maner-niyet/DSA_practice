/* You are given an array of positive integers representing the prices of a single stock on various days (each index in the array represents a different day). You're also given an int k which represents the number of transactions you are allowed to make. One transaction consists of buying the stock on a given day and selling it on another, later day.
Write a function that returns the maximum profit that you can make by buying and selling the stock, given k transactions.
Note that you can only hold one share of the stock at a time; on other words you cant's buy more than one share of the stock on any given day, and you can't buy a share of the stock if you are still holding another share. Also, you don't need to use all k transactions that you're allowed. */

//Approach: DP
//Time: O(n * k) | Space: O(n * k) 
//where n is prices.length and k is number of transactions
const maxProfitWithKTransactions = (prices, k) => {
    if (!prices.length) return 0;
    const profits = buildProfits(prices, k),
        transactions = profits.length,
        days = profits[0].length;

    for (let t = 1; t < transactions; t++) {
        let maxProfitSoFar = -Infinity;
        for (let d = 1; d < days; d++) {
            maxProfitSoFar = Math.max(maxProfitSoFar, profits[t - 1][d - 1] - prices[d - 1]);
            profits[t][d] = Math.max(profits[t][d - 1], maxProfitSoFar + prices[d])
        }
    }
    return profits[transactions - 1][days - 1];
}

const buildProfits = (prices, k) => {
    const profits = Array(k + 1).fill(0).map(el => Array(prices.length).fill(0));
    return profits;
}
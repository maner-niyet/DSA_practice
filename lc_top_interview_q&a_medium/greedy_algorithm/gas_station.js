/* There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique 
https://leetcode.com/problems/gas-station/*/

//Solution 1
//Approach: greedy
//Time: O(n) | Spacae: O(1)
const canCompleteCircuit = (gas, cost) => {
    const totalGas = getTotal(gas),
        totalCost = getTotal(cost);
    if (totalGas < totalCost) return -1;
    let total = 0, result = 0;
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];
        total += diff;
        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }
    return result;
};

const getTotal = array => {
    return array.reduce((a, b) => a + b, 0);
}
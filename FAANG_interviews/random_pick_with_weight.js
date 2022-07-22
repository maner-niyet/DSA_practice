/* You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%). */

//Solution 1
//Time: O(n) | Space: O(n)

var Solution = function(w) {
    this.w = [];
    this.total = w.reduce((a, b) => a + b, 0);
    let start = 0;
    for (let weight of w) {
        this.w.push([start, weight + start - 1]);
        start += weight;
    }
}

Solution.prototype.pickIndex = function() {
    let random = Math.floor(Math.random() * this.total);
    
    for (let i = 0; i < this.w.length; i++) {
        const [lower, upper] = this.w[i];
        if (lower <= random && random <= upper) {
            return i;
        }
    }
}

//Solution 2
//Approach: Using prefix sum
//Time: O(n) | Space: O(n)

var Solution = function(w) {
    this.prefix_sums = [];
    prefix_sum = 0;
    for (let weight of w) {
        prefix_sum += weight;
        this.prefix_sums.push(prefix_sum);
    }
    this.total = prefix_sum; 
}

Solution.prototype.pickIndex = function() {
    let random = Math.floor(Math.random() * this.total);
    
    for (let i = 0; i < this.prefix_sums.length; i++) {
        if (random < this.prefix_sums[i]) {
            return i;
        }
    }
}

//Solution 3
//Approach: pickIndex using Binary Search
//Time: O(logn) | Space: O(n)

var Solution = function(w) {
    this.sums = [];
    let sum = 0;
    for (let weight of w) {
        sum += weight;
        this.sums.push(sum);
    }
    this.total = sum; 
}

Solution.prototype.pickIndex = function() {
    let random = Math.floor(Math.random() * this.total);
    
    let left = 0, right = this.sums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.sums[mid] > random) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

/* You are given an array of arrays where each subarray holds two integer values and represents an item; the first integer is the item's value, and the second integer is the item's weight. You are also given an int representing the max capacity of a knapsack that you have.
Your goal is to fit items in your knapsack without having sum of their weights exceed the knapsack's capacity, all the while maximizing their combined value. Note that you only have one of each item at your disposal.
Write a function that returns the max combined value of the items that you should pick as well as an array of the indices of each item picked. 
If there are multple combinations of the items that maximize the total value in the knapsack, your function can return any of them.  */

//Solution 1
//Approach: DP, top down
//Time: O(n * m) | Space: O(n * m) 
//where n is items.length, m is capacity
const knapsackProblem = (items, capacity) => {
    const matrix = buildMatrix(items, capacity),
          rows = matrix.length,
          cols = matrix[0].length;
    for (let row = 1; row < rows; row++) {
      const [value, weight] = items[row - 1];
      for (let cap = 1; cap < cols; cap++) {
         if (weight <= cap) {
           matrix[row][cap] = Math.max(matrix[row - 1][cap], 
                                       value + matrix[row -1][cap - weight])
         } else {
           matrix[row][cap] = matrix[row - 1][cap];
         }
      }
    }
    
    const maxTotal = matrix[items.length][capacity];
    const sequence = buildSequence(matrix, items);
    return [maxTotal, sequence];
}

const buildMatrix = (items, capacity) => {
    const matrix = Array(items.length + 1).fill(0)
                                        .map(row => Array(capacity + 1)
                                        .fill(0));
    return matrix;
}
    
const buildSequence = (matrix, items) => {
    let row = matrix.length - 1,
        col = matrix[0].length - 1; 
    const sequence = [];
    while (row > 0 && col > 0) {
      if (matrix[row][col] > matrix[row - 1][col]) {
        sequence.push(row - 1);
        col-= items[row -1][1];
      }
      row--;
      
    }
    return sequence.reverse();
}
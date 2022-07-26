/* Given a 2D array of potentially unequal height and width contaning 0s and 1s. Each 0 represents land, and each 1 represents part of river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.
Note that a river can twist. In other words, it doesnt have to be a straight vertical line or a straight horizontal line.
Write a function that returns an array of the size of all rivers represented in the input matrix. The sizes don't need to be in any particular order. */

//Solution 1
//Approach: DFS, set
// Time: O(n * m) | Space: O(n * m) where n and m are width and height of matrix 

function riverSizes(matrix) {
    const sizes = [];
    const visited = new Set();
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 1) {
          let riverSize = getRiverSize(i, j, matrix, visited);
          if (riverSize > 0) sizes.push(riverSize)
        }
       }
    }
    return sizes;
}
  
function getRiverSize(i, j, matrix, visited) {
    const rowInbound = i >= 0 && i < matrix.length;
    const colInbound = j >= 0 && j < matrix[0].length;
  
    if (!rowInbound || !colInbound) return 0;
    if (matrix[i][j] === 0) return 0;
    let position = i + "," + j;
    if (visited.has(position)) return 0;
    visited.add(position);
    let size = 1;
    size+= getRiverSize(i - 1, j, matrix, visited);
    size+= getRiverSize(i + 1, j, matrix, visited);
    size+= getRiverSize(i, j - 1, matrix, visited);
    size+= getRiverSize(i, j + 1, matrix, visited);
    return size;
}
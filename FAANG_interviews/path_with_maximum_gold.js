/* In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold. 

https://leetcode.com/problems/path-with-maximum-gold/
*/

//Solution 1
//Approach: DFS, backtracking
//Time: O(n * m) | Space: O(n * m)

var getMaximumGold = function(grid) {
    const visited = new Set();
    let maxGold = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 0) continue;
            maxGold = Math.max(maxGold, getGold(r, c, grid, visited))
        }
    }
    return maxGold;
};


function getGold(r, c, grid, visited) {
    const rowInbound = r >= 0 && r < grid.length;
    const colInbound = c >= 0 && c < grid[0].length;
    if (!rowInbound || !colInbound) return 0;
    if (grid[r][c] === 0) return 0;
    let pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);
    sum = grid[r][c];
    let gold = sum + Math.max(getGold(r + 1, c, grid, visited), 
                              getGold(r - 1, c, grid, visited),
                              getGold(r, c + 1, grid, visited), 
                              getGold(r, c - 1, grid, visited));
    
    visited.delete(pos)
    return gold;
}
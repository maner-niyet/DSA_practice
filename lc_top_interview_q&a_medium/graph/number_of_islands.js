
//Solution 1
//Approach: DFS
//Time: O(n * m) | Space: O(n * m) 
//where n is width, m is height
const numIslands = grid => {
    let islandCounter = 0; 
    const rows = grid.length, 
          cols = grid[0].length,
          visited = new Set(); 
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                islandCounter += explore(row, col, grid, visited)            
            }
        }
    }  
    return islandCounter;
};

const explore = (row, col, grid, visited) => {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;
    if (!rowInbound || !colInbound) return 0;
    if (grid[row][col] === "0") return 0;
    let position = row + "," + col;
    if (visited.has(position)) return 0;
    visited.add(position);
    explore(row - 1, col, grid, visited);
    explore(row + 1, col, grid, visited);
    explore(row, col - 1, grid, visited);
    explore(row, col + 1, grid, visited);
    return 1;
}   

//Solution 2
//Approach: BFS
//Time: O(n * m) | Space: O(Math.min(n, m)) 
//where n is width, m is height
//this image explains the space complexity https://imgur.com/gallery/M58OKvB
const numIslands1 = grid => {
    let islandCounter = 0; 
    const rows = grid.length, 
          cols = grid[0].length,
          visited= new Set();
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1" && !visited.has(row + "," + col)) {                
                bfs(row, col, grid, visited);
                islandCounter++; 
            }
        }
    }  
    return islandCounter;
};

const bfs = (row, col, grid, visited) => {
    const queue = [[row, col]];
    visited.add(row + "," + col)
    while (queue.length) {
        const [row, col] = queue.shift();
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (const [dr, dc] of directions) {
            let r = row + dr, c = col + dc;
            const rowInbound = r >= 0 && r < grid.length;
            const colInbound = c >= 0 && c < grid[0].length;
            let position = r + "," + c;
            if (rowInbound && colInbound && 
                grid[r][c] === "1" &&
                !visited.has(position)) {
                visited.add(position);
                queue.push([r, c])
            }
        }
    }
};
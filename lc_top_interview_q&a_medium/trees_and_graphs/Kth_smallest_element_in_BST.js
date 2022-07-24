/* Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree. */

//Solution 1
//Approach: DFS, recursive 
//Time: O(n) | Space: O(n)
var kthSmallest = function(root, k) {      
    const result = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        result.push(root.val);
        dfs(root.right)
    }
    dfs(root);
    return result[k - 1]
};

//Solution 2
//Approach: DFS, Iterative using stack
//Time: O(n) | Space: O(n)

var kthSmallest = function(root, k) {  
    const stack = [];
    let current = root;
    const result= [];
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        } 
        current = stack.pop();
        result.push(current.val);
        if (result.length === k) {
            return result[result.length - 1]
        }
        current = current.right;
    } 
};

//Solution 3
//Approach: DFS, Iterative using stack
//Time: O(n) | Space: O(n) (more efficient than Sln2)

var kthSmallest = function(root, k) {  
    const stack = [];
    let current = root,
        n = 0;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        } 
        current = stack.pop();
        n++;
        if (n === k) return current.val;
        current = current.right;
    } 
};
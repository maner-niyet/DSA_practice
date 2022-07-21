/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 
https://leetcode.com/problems/binary-tree-level-order-traversal/ */

//Solution 1 - Using Queue

var levelOrder = function(root) {
    if (!root) return []
    const result = [];
    let queue = [root];
    let nextQueue = [];
    let level = [];
    
    while (queue.length) {
        for (let root of queue) {
            level.push(root.val);
            if (root.left) {
                nextQueue.push(root.left)
            } 
            if (root.right) {
                nextQueue.push(root.right)
            } 
        }
        result.push(level);
        level = [];
        queue = nextQueue;
        nextQueue = [];
    }
    return result;
};

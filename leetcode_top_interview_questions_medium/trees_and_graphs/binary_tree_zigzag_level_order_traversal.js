/* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between). 

https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ */

//Solution 1 - Queue, reverse
//Time: O(n) | Space: O(n)

var zigzagLevelOrder = function(root) {
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
    
    for (let i = 1; i < result.length; i+=2) {
        result[i] = result[i].reverse()
    }

    return result;
};

//Solution 2
//Time: O(n) | Space: O(n)

var zigzagLevelOrder = function(root) {
    if (!root) return []
    const result = [];
    let stack1 = [root];
    let stack2 = [];
    let level = [];
    
    while (stack1.length || stack2.length) {
        while (stack1.length) {
            root = stack1.pop();
            level.push(root.val);
            if (root.left) {
                stack2.push(root.left)
            } 
            if (root.right) {
                stack2.push(root.right)
            }
        }
        result.push(level);
        level = [];
        
        while (stack2.length) {
            root = stack2.pop();
            level.push(root.val);
            if (root.right) {
                stack1.push(root.right)
            } 
            if (root.left) {
                stack1.push(root.left)
            }
        }
        if (level.length) result.push(level);
        level = [];
    }
    return result;
};

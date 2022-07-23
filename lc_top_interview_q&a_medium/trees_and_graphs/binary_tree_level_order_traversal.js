/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 
https://leetcode.com/problems/binary-tree-level-order-traversal/ */

//Solution 1 - Using Queue

function levelOrderTraversal(root) {
    if (!root) return [];
    const result = [], queue = [root];
        
    while (queue.length) {
        let level = [];
        let queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            let node = queue.pop();
            level.push(node.val);
            node.left ? queue.unshift(node.left) : null;
            node.right ? queue.unshift(node.right) : null;
        }
        result.push(level);
    }
    return result;
}
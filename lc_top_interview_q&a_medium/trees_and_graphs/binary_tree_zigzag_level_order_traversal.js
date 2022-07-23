/* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between). 

https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ */

//Solution 1 - Queue, reverse
//Time: O(n) | Space: O(n)

function zigzagLevelOrder(root) {
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
    for (let i = 1; i < result.length; i+=2) {
        result[i] = result[i].reverse();
    }
    return result;
}

//Solution 2
//Time: O(n) | Space: O(n)

function zigzagLevelOrder(root) {
    if (!root) return [];
    const result = [], 
        queue = [root];
    let zigzag = true;
    while (queue.length) {
        let level = [];
        let queueLength = queue.length;
        zigzag = !zigzag;
        for (let i = 0; i < queueLength; i++) {
            let node = queue.pop();
            if (zigzag) {
                level.unshift(node.val)
            } else {
                level.push(node.val);
            }
            node.left ? queue.unshift(node.left) : null;
            node.right ? queue.unshift(node.right) : null;
        }
        result.push(level);
    }
    return result;
}
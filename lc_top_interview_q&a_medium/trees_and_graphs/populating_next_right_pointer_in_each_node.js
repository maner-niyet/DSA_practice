/* You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL. 
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
*/

//Solution 1
//Approach: BFS
//Time: O(n) | Space: O(n)
var connect = function(root) {
    if (!root) return null;
    const queue= [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.pop();
            if (i < size - 1) {
                node.next = queue[queue.length - 1];
            }
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
    }
    return root;
};

//Solution 2
//Approach: BFS, using connection
//Time: O(n) | Space: O(1)

var connect = function(root) {
    if (!root) return null;
    let current = root, 
        next = root.left;

    while (current && next) {
        current.left.next = current.right;
        if (current.next) {
            current.right.next = current.next.left;
        }
        current = current.next;
        if (!current) {
            current = next;
            next = next.left
        }
    }
    return root;
};
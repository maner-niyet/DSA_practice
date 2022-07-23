/* Given the root of a binary tree, return the inorder traversal of its nodes' values. */

//Solution 1 - Recursive
//Time: O(n) | Space: O(n)

var inorderTraversal = function(root) {
    let result = [];
    function inorder(root) {
        if (!root) return;
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return result;
};

//Solution 2 - Iterative with stack
//Time: O(n) | Space: O(n)

var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val);
        current = current.right;
    }
    return result;
};



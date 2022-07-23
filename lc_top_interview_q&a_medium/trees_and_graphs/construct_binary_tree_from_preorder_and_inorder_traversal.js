/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree. */

//Solution 1
//Approach: Recursive, hash map
//Time: O(n) | Space: O(n)
var buildTree = function(preorder, inorder) {
    if (!inorder.length || !preorder.length) return null;
    const map = {};
    inorder.map((el, index) => map[el] = index);
    
    function dfs(start, end) {
        if (start > end) return null;
        let root = new TreeNode(preorder.shift());
        root.left = dfs(start, map[root.val] - 1);
        root.right = dfs(map[root.val] + 1, end);
        return root;
    }
    return dfs(0, inorder.length - 1);
};

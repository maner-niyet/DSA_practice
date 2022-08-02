/* Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to that target value contained in the BST.
You can assume that there will only be one closest value.
Each BST node has an integer value, a left child node and a right child node. A node is said to be a valid BST node only if it satisfies the BST property: its value is strictly greater that the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null */

//Solution 1
//Approach: Binary Search
//Average: O(logn) time | O(1) space 
//Worst:      O(n) time | O(1) space

const findClosestValueInBST = (tree, target) => {
    let closest = Infinity, 
        current = tree;
    while (current) {
        if (Math.abs(closest - target) > Math.abs(current.value - target)) {
            closest = current.value;
        }
        if (target > current.value) {
            current = current.right;
        } else if (target < current.value) {
            current = current.left;
        } else {
            break;
        }
    }
    return closest;
}

//Solution 2
//Approach: Recursion
//Average: O(logn) time | O(logn) space 
//Worst:      O(n) time | O(n) space
const findClosestValueInBst = (tree, target) => {
    return helper(tree, target, Infinity);
}

const helper = (tree, target, closest) => {
    if (!tree) return closest;
    if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
        closest = tree.value;
    }    
    if (target > tree.value) {
        return helper(tree.right, target, closest)
    } else if (target < tree.value) {
        return helper(tree.left, target, closest)
    } else {
        return closest;
    }
}
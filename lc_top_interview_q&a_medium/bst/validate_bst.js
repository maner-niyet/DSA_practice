

//Solution 1
//Approach: Recursion, DFS
//Time: O(n) | Space: O(d)
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const validateBST = (tree) => {
    const helper = (node, min, max) => {
        if (!node) return true;
        if (node.value < min || node.value >= max) return false;
        return helper(node.left, min, node.value) && helper(node.right, node.value, max);
    }
    return helper(tree, -Infinity, Infinity);
}

//Solution 2
//Approach: Iterative, DFS, using stack
//Time: O(n) | Space: O(d)

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const validateBst = (tree) => {
    const stack = [{current: tree, min: -Infinity, max: Infinity}];
    while (stack.length) {
        const {current, min, max} = stack.pop();
        if (current.value >= max || current.value < min) return false;

        if (current.left) {
            stack.push({current: current.left, min, max: current.value})
        }
        if (current.right) {
            stack.push({current: current.right, min: current.value, max})
        }
    }
    return true;
}

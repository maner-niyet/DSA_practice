//Solution 1
//Approach: Recursive
//O(n) time | O(n) space
const inOrderTraverse = (tree, array) => {
    if (tree) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array)
    }
    return array;
}

const preOrderTraverse = (tree, array) => {
    if (tree) {
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array)
    }
    return array;
}

const postOrderTraverse = (tree, array) => {
    if (tree) {
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array)
        array.push(tree.value);
    }
    return array;
}

//Solution 2
//Approach: Iterative
//O(n) time | O(n) space
const inOrder = (tree, array) => {
    const stack = [];
    let current = tree ? tree : null;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        array.push(current.value);
        current = current.right;
    }
    return array;
}

const preOrder = (tree, array) => {
    const stack = [];
    if (tree) {
        stack.push(tree);
    }
    while (stack.length) {
        let current = stack.pop();
        array.push(current.value);
        if (current.right) {
            stack.push(current.right)
        } 
        if (current.left) {
            stack.push(current.left);
        }
    }
    return array;
}

const postOrder = (tree, array) => {    
  const stack = [];  
  if (tree) stack.push(tree);
    
    while (stack.length) {
        let current = stack.pop();
        array.push(current.value);
        if (current.left) {
            stack.push(current.left)
        }
        if (current.right) {
            stack.push(current.right);
        }
    }
    return array.reverse();
}
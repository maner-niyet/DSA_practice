//Approach: Binary Search
//Average: O(logn) time | O(1) space 
//Worst:      O(n) time | O(1) space
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let current = this;
        while (current) {
            if (current.value > value) {
                if (!current.left) {
                    current.left = new BST(value);
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = new BST(value);
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }

    contains(value) {
        let current = this;
        while (current) {
            if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    remove(value, parent = null) {
        let current = this;
        while (current) {
            if (current.value > value) {
                parent = current;
                current = current.left;
            } else if (current.value < value) {
                parent = current;
                current = current.right;
            } else {
                if (current.left && current.right) {
                    current.value = current.right.getMinValue();
                    current.right.remove(current.value, current);
                } else if (!parent) {
                    if (current.left) {
                        current.value = current.left.value;
                        current.right = current.left.right;
                        current.left = current.left.left;
                    } else if (current.right) {
                        current.value = current.right.value;
                        current.left = current.right.left;
                        current.right = current.right.right;
                    } else {

                    }
                } else if (parent.left === current){
                    parent.left = current.left ? current.left : current.right; 
                } else if (parent.right === current) {
                    parent.right = current.left ? current.left : current.right;
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let current = this;
        while (current.left) {
            current = current.left;
        } 
        return current.value;
    }
}

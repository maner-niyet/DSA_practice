const minHeightBst = array => {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    if (left > right) return null;
    let valueToAdd = array[mid];
    let node = new BST(valueToAdd);
    node.left = minHeightBst(array.slice(0, mid));
    node.right = minHeightBst(array.slice(mid + 1))    
    return node;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
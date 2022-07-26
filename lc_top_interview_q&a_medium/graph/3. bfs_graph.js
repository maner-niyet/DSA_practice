//Solution: BFS, using queue
//Time: O(v + e) | Space: (v)

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      const queue = [this];
      while (queue.length > 0) {
        let currentNode = queue.shift();
        array.push(currentNode.name);
        for (let child of currentNode.children) {
          queue.push(child)
        }
      }
      return array;
    }
}
  
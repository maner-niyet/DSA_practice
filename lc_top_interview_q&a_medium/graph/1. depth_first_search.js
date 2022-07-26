/* You are given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
Implement the depth-first-seach method on the Node class, which takes in an empty array, traverses the tree using depth first search appproach (specifically navigating tree from left to right), stores all of the nodes' names in the input array, and return it. */

//Solution 1
//Approach: Recursive
//Time: O(v + e) : Space: O(v)

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array.push(this.name);
      for (const child of this.children) {
        child.depthFirstSearch(array);
      }
      return array;
    }
}

//Solution 2
//Approach: Iterative
//Time: O(v + e) : Space: O(v)
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      const stack = [this];
      while (stack.length) {
        let current = stack.pop();
        array.push(current.name);
        for (let i = current.children.length - 1; i >= 0; i--) {
          stack.push(current.children[i])
        }
      }
      return array
    }
}
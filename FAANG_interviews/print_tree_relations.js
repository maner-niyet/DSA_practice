/* Write a function, printTree(), which prints a given tree to stdout. 
Details:
- the argument printTree is a stream of Relations: pairs of "parent -> child" relationships.
- each string found anywhere in the input represents a unique node.
- each parent can have many children.
- the input list may contain Relations in any order, although:
    - the order in which the pairs appear in the input list determines the nodes' order with respect to its siblings.
     
Example input:
const input = [];
input.push(["animal", "mammal"])
input.push(["animal", "bird"])
input.push(["lifeform", "animal"])
input.push(["cat", "lion"])
input.push(["mammal", "cat"])
input.push(["animal", "fish"])

printTree(input);

Expected output:
1: lifeform
2:  animal
3:      mammal
4:          cat
5:              lion
6:          bird
7:          fish
*/

//Solution
//Approach: DFS
//Time: O(N) | Space: O(N)

const input = [];
input.push(["animal", "mammal"])
input.push(["animal", "bird"])
input.push(["lifeform", "animal"])
input.push(["cat", "lion"])
input.push(["mammal", "cat"])
input.push(["animal", "fish"])

function printTree(input) {
  const tree = buildTree(input);
  const root = getRoot(tree);
  dfs(root, tree, 0);
}

function buildTree(array) {
  const tree = {};
  for (let el of array) {
    const [parent, child] = el;
    if (!(parent in tree)) {
      tree[parent] = [child];
    } else {
      tree[parent].push(child);
    }
  }
  return tree;
}

function getRoot(tree) {
  const parents = new Set(Object.keys(tree));
  for (let children of Object.values(tree)) {
    for (let child of children) {
      if (parents.has(child)) parents.delete(child)
    }
  }
  const root = [...parents][0]; 
  return root;
}

function dfs(root, tree, depth) {
  console.log("\t".repeat(depth) + root);
  if (!tree.hasOwnProperty(root)) return;
  for (let child of tree[root]) {
    dfs(child, tree, depth + 1)
  }
}
    
/* Given 3 inputs, all of which are instances od AncestralTree class that have an ancestor property pointing to their youngest ancestor.The first input is the top ancestor in an ancestral tree (i.e. the only instance that has no ancestor - its ancestor property points to none/null) and the other two inputs are descendants in the ancestral tree.
Write a function that returns the youngest common ancestor to the two descendants */

//Solution 1
//Time: O(d) | Space: O(1)

class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
}
  
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let depthOne = getDepth(topAncestor, descendantOne);
    let depthTwo = getDepth(topAncestor, descendantTwo);
    
    let [lowerDescendant, higherDescendant] = depthOne > depthTwo ? 
      [descendantOne, descendantTwo] : [descendantTwo, descendantOne];
    let diff = Math.abs(depthOne - depthTwo);
    
    while (diff > 0) {
      lowerDescendant = lowerDescendant.ancestor;
      diff--;
    }
    while (lowerDescendant != higherDescendant) {
      lowerDescendant = lowerDescendant.ancestor;
      higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescendant
}
  
function getDepth(ancestor, descendant) {
    let depth = 0
    while (ancestor != descendant) {
      descendant = descendant.ancestor;
      depth++;
    }
    return depth;
}
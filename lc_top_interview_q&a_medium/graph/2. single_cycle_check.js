//Solution 1
//Time: O(n) | Space: O(1) where n is the length of array

function hasSingleCycle(array) {
    let startIdx = 0;
    let currentIdx = startIdx;
    let countVisited = 0;
    while (countVisited < array.length) {
      if (countVisited > 0 && currentIdx === startIdx) return false;
      countVisited++;
      currentIdx = getNextIdx(currentIdx, array);
    }
    return currentIdx === startIdx;
}

function getNextIdx(currentIdx, array) {
    let jump = array[currentIdx];
    let nextIdx = (currentIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}
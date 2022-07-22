/* In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1. 
https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/  */

//Solution 1
//Approach: Hashmap, frequency counter
//Time: O(n) | Space: O(n)


var minDominoRotations = function(tops, bottoms) {
    let result = 0;
    const [topEl, topFreq] = getCounts(tops);
    const [bottomEl, bottomFreq]  = getCounts(bottoms);
    if(topFreq > bottomFreq) {
        result = getRotations(tops, bottoms, topEl);
    } else {
        result = getRotations(bottoms, tops, bottomEl);
    }
    return result;
};

function getCounts(array) {
    const count = {};
    let freqEl = [null, 0]
    for (let el of array) {
        if (el in count) {
            count[el]++
        } else {
            count[el] = 1;
        }
    }
    for (let key in count) {
        if (count[key] > freqEl[1]) {
            freqEl = [Number(key), count[key]]
        }
    }
    return freqEl;
}

function getRotations(array1, array2, freqEl) {
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != freqEl) {
            if (array2[i] != freqEl) return -1;
            if (array2[i] == freqEl) result++;
        } 
    }
    return result;
}
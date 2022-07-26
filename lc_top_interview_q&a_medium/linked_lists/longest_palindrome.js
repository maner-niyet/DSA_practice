/* Given a linked list, the task is to complete the function maxPalindrome() which returns an integer denoting  the length of the longest palindrome list that exist in the given linked list. */

//Time: O(n^2) | Space: O(1)
class Solution {
    maxPalindrome(node)
    {
        if (!node) return 0;
        let current = node;
        let prev = null;
        let answer = 0;
        while (current) {
           let next = current.next;
           current.next = prev;
           answer = Math.max(answer, 2 * this.count(prev, next) + 1)
           answer = Math.max(answer, 2 * this.count(current, next))
           prev = current;
           current = next;
        }
        return answer
    }
    count(nodeA, nodeB) {
        let a = nodeA;
        let b = nodeB;
        let count = 0;
        while (a && b) {
            if (a.data === b.data) {
                count++;
                a = a.next;
                b = b.next;
            } else {
                break;
            }
        }
        
        return count;
    }
}
/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
https://leetcode.com/problems/add-two-numbers/ */

//Solution 1
//Time: O(n) | Space: O(n) where n is the number of nodes in longest LL

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        console.log(current)
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;
        
        let sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        current.next = new ListNode(sum);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
};
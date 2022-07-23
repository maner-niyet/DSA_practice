/* Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null. */


//Solution 1
//Time: O(N) | Space: O(1)

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);
    
    if (lengthA > lengthB) {
        headA = correctOffset(lengthA, lengthB, headA)
    } else {
        headB = correctOffset(lengthB, lengthA, headB)
    }
    
    while (headA != headB) {
        headA = headA.next;
        headB = headB.next
    }
    return headA
};

function getLength(head) {
    let length = 1;
    while (head.next) {
        length++;
        head = head.next;
    }
    return length;
}

function correctOffset(longer, shorter, head) {
    let diff = longer - shorter;
        
    while (diff > 0) {
        head = head.next;
        diff--;
    }
    return head;
}

//Solution 2
//Time: O(n) | Space: O(n)
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA != pointerB) {
        if (!pointerA) {
            pointerA = headB;
        } else {
            pointerA = pointerA.next;
        }
        
        if (!pointerB) {
            pointerB = headA;
        } else {
            pointerB = pointerB.next;
        }
    }
    
    return pointerA;
}



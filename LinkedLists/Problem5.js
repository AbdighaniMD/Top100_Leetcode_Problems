/**
 * 234 leetcode Easy. Palindrome Linked List
 * @param {ListNode} head
 * @return {boolean}
 * O(2N) == O(N)
 * 
 */

class Node {
    constructor(value, next = null){
        this.val = val;
        this.next = next;
    }
}

let isPalindrome = (head) =>{

    let slow = head, fast = head, startPointer = head;
    let length = 0;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        length++;
    }

    //return slow.val;

    let middle = reverseLinkedlist(slow);


    while(length){
        length--;
        if(middle.val !== startPointer.val) return false;
        middle = middle.next;
        startPointer = startPointer.next;
    }

    return true;
}

function reverseLinkedlist(head) {
    let curr = head;
    let prev = null;
    let next;

    while(curr !== null){
        next = curr.next;
        //change direction 
        curr.next = prev;
        // move prev and current up by 1;
        prev = curr;
        curr = next;
    }

    return prev;
}

// Test case 1
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(4, node4);
const node2 = new Node(5, node3);
const head1 = new Node(6, node2);

/*
// Test case 2
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);
*/

console.log(isPalindrome(head1)) // TRUE

//console.log(reverseLinkedlist(head1))
/**
 * 141 leetcode easy. Linked List Cycle
 * @param {ListNode} head
 * @return {boolean}
 * The time complexity of the algorithm is O(n) , where  n is the number of nodes in the linked list.
 * The space complexity of the algorithm above is  O(1) .
 */
class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
let detectCycle = (head) => {
    if(!head){
        return false;
    }
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        // 1xSpeed
        slow = slow.next;
        //2x speed
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
}

// Test case 1
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

// add a cycle 
node6.next = node3;


console.log(detectCycle(head1)) // TRUE

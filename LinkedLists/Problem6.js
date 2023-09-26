/**
 * 142 leetcode Medium. 142. Linked List Cycle II
 * @param {ListNode} head
 * @return {boolean}
 * 
 */
class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
let detectCycleBasic = (head) => {
    if(!head){
        return false;
    }
    let slow = head
    let fast = head
    let startPoint = head;

    while(fast !== null && fast.next !== null){
        // 1xSpeed
        slow = slow.next;
        //2x speed
        fast = fast.next.next;

        if(slow === fast){
            while(startPoint !== null && startPoint.next !== null){
                // 1xSpeed
                slow = slow.next;
                startPoint = startPoint.next

                if(slow === startPoint){
                    return slow.value
                }
            }
        }
    }

    return null;
}

let detectCycle = (head) => {
    if(!head){
        return false;
    }
    let slow = head
    let fast = head

    let startPoint = head;
    let cyclePoint =  null; 

    while(true){
        if(fast === null || fast.next === null){
            return null
        }
        // 1xSpeed
        slow = slow.next;
        //2x speed
        fast = fast.next.next;

        if(slow === fast){
            cyclePoint = slow 
            break;
        }
    }

    while(startPoint !== cyclePoint){
        // 1xSpeed
        startPoint = startPoint.next
        cyclePoint = cyclePoint.next;
    }

    return startPoint.value;
}


// Test case 1
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

// add a cycle 
node6.next = node2;


console.log(detectCycleBasic(head1))
console.log(detectCycle(head1))

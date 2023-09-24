/**
 * 206 leetcode Easy. Reverse Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    printList(){
        let temp = this;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }


    reverse() {
        // initialize prev and next pointers to NULL
        let prev = null;
        let next = null;
        // set current pointer to the head node
        let curr = this;

        // while the current pointer is not NULL
        while (curr !== null) {
            // set the next pointer to the next node in the list
            next = curr.next;
            // reverse the current node's pointer to point to the previous node
            curr.next = prev;
            // set the previous pointer to the current node
            prev = curr;
            // move the current pointer to the next node
            curr = next;
        }

        // set the head pointer to the last node, which is the new first node after reversal
        let head = prev;
        // return the new head pointer
        return head;
    }
}
/*
function reverseList(head) {
    // initialize prev and next pointers to NULL
    let prev = null;
    let next = null;
    // set current pointer to the head node
    let curr = head;
    
    // while the current pointer is not NULL
    while (curr !== null) {
      // set the next pointer to the next node in the list
      next = curr.next;
      // reverse the current node's pointer to point to the previous node
      curr.next = prev;
      // set the previous pointer to the current node
      prev = curr;
      // move the current pointer to the next node
      curr = next;
    }
    
    // set the head pointer to the last node, which is the new first node after reversal
    head = prev;
    // return the new head pointer
    return head;
  }

*/

  const head = new Node(5);
  head.next = new Node(6);
  head.next.next = new Node(7);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(9);
  head.next.next.next.next.next = new Node(10);

  head.printList();
  //head.reverse()
  const newHead = head.reverse();

  newHead.printList();
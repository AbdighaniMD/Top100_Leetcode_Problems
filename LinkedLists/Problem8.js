/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
  */
/**
 * 19 leetcode medium. Remove Nth Node From End of List
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let dummyhead = {next: head}
    let slow = dummyhead;
    let fast = dummyhead;

    // Move Fast N nodes ahead of slow
    for(let i = 1; i <= n; i++){
        fast = fast.next
    }

    // Move slow and fast up one node at a time  untile fast is last node
    while(fast.next !== null){
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return dummyhead.next
};
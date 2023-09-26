/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersBasic = function(l1, l2) {
    let a1 = []
    let a2 = []
    while(l1 != null){
        a1.push(l1.val)
        l1 = l1.next
    }
    while(l2 != null){
        a2.push(l2.val)
        l2 = l2.next
    }
    let new1 = a1.reverse().join('')
    let new2 = a2.reverse().join("")
    let add = Number(new1) + Number(new2)
    let newAdd = String(add).split("").reverse()

    let list = new ListNode(0);
    let head = list 
    for(let i = 0; i < newAdd.length; i++){
        head.next = new ListNode(newAdd[i]);
        head = head.next
    }
    return list.next
};

//-------------------------------------------------------------------

var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    let head = list;

    let sum = 0;
    let carry = 0;

    while(l1 !== null|| l2 !== null || sum !==0){

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next; 
        }

        if(sum >= 10){
            carry = 1;
            sum = sum -10;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return list.next
};
//19. Remove Nth Node From End of List

// QUS-URL- https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // console.log(head.val)
    // console.log(head.next.val)

    let dummy = new ListNode(0); // Create a dummy node to handle edge cases

    dummy.next=head;

    let size=0;
    let count=0
    let current = head;

    // Calculate the size of the list
    while(current){
        current= current.next;
        size++;
    }

    // Calculate the position of the node to remove from the beginning
    count=size-n;

    current= dummy;
    console.log(count);

     // Move current to the node just before the one to be removed
   for(let i=0; i<count; i++){
    current= current.next;
   }

    current.next=current.next.next;

    return dummy.next;

};
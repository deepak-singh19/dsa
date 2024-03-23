/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//92. Reverse Linked List II
// QUS URL- https://leetcode.com/problems/reverse-linked-list-ii/description/

* @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy= new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    // Move prev to the node before the sublist to be reversed
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Reverse the sublist from left to right
    let current = prev.next;
    for (let i = left; i < right; i++) {
        let nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }
    
    return dummy.next;


};

//82. Remove Duplicates from Sorted List II
// QUS URL- https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let dummy = new ListNode(-200);
    dummy.next=current;
    let previous= dummy;
    
    if(!head || !head.next){
        return head;
    }

    while(current){
        while(current.next && current.val== current.next.val){
            current= current.next;
        }
        if(previous.next==current){
            previous=previous.next
        }else{
            previous.next = current.next;
        }

        current= current.next;
    }

    return dummy.next;
    
};
// 83. Remove Duplicates from Sorted List
// QUS URL - https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

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
    
    if(!head || !head.next){
        return head;
    }

    while(current && current.next){
        if(current.val == current.next.val){
            current.next=current.next.next;
        }else{
            current=current.next;
        }
    }

    return head;
    
};
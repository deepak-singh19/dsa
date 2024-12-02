/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    // if(!head) return

    

    if (!head) return null;

    let leftDummy=new ListNode(0)
    let rightDummy= new ListNode(0)

    let left=leftDummy
    let right=rightDummy

    // let leftDummy = new ListNode(0); // Dummy node for the left list
    // let rightDummy = new ListNode(0); // Dummy node for the right list

    // let left = leftDummy;
    // let right = rightDummy;

    while(head){
        if(head.val<x){
            left.next=head
            left=left.next
        }else{
            right.next=head
            right=right.next
        }
        head=head.next
    }

    right.next=null
    left.next=rightDummy.next
    

    return leftDummy.next
};


//LC - https://leetcode.com/problems/partition-list/submissions/1468132699/?envType=study-plan-v2&envId=top-interview-150
// 86. Partition List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.
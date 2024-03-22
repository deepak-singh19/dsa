// 1721. Swapping Nodes in a Linked List
// QUS-URL- https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let size=0;
    // let swapFromBeg=0;
    let swapFromEnd;
    let node1;
    let node2;
    let current= head;

    while(current){ 
        size++;
        current=current.next;
    }
    // console.log(size);
    current=head;
    swapFromEnd=size-k+1;

    for(let i=1; i<=size;i++){
        if(i==k){
            // console.log("before SWAP from the start ",current.val);
            node1=current;
        }
        if(i==swapFromEnd){
            // console.log("before SWAP from the end ",current.val);
            node2=current;
        }
        current=current.next;
    }
    let temp=node1.val;
    node1.val=node2.val;
    node2.val=temp;

    return head;
    
};
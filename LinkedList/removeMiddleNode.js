//2095. Delete the Middle Node of a Linked List
// Qus URL- https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75


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
var deleteMiddle = function(head) {
    let size=0;
    let current= head;
    let previous;

    if (!head || !head.next) {
        // List has 0 or 1 node, so there's no middle node to delete
        return null;
    }

    while(current){
        size++;
        current= current.next;
    }
    

    current= head;

    let nodeToBeDeleted= Math.floor(size/2);

    for(let i=0; i<nodeToBeDeleted-1;i++){
        current= current.next;
    }

    let dummy;

    if(current.next.next){
         dummy= current.next.next;
         previous= current;
        console.log("previous val", previous.val)
        // current= current.next;
        console.log("dummy val", dummy.val)
        previous.next=dummy;

    }else{
        current.next=null;
    }


    return head;
};
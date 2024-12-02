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
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Find the length of the list and the tail node
    let tail = head;
    let length = 1;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Calculate the effective number of rotations
    k = k % length;
    if (k === 0) return head;

    // Find the new head after rotation
    let stepsToNewHead = length - k;
    let newTail = head;

    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    // Rearrange pointers
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
    
};


Code


// Testcase
// Testcase
// Test Result
// 61. Rotate List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.
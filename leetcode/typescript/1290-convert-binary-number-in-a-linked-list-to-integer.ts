import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 *
 * 1290. Convert Binary Number in a Linked List to Integer
 * Easy
 *
 * @param {ListNode} head
 * @returns {number}
 */
function getDecimalValue(head: ListNode | null): number {
  let num = '';
  function traverse(node: ListNode | null) {
    if (!node) {
      return;
    }
    num += node.val;
    traverse(node.next);
  }
  traverse(head);

  return parseInt(num, 2);
}

console.log(getDecimalValue(createList([1, 0, 1]))); // 5
console.log(getDecimalValue(createList([0]))); // 0

// function getDecimalValue(head: ListNode | null): number {
//   let num = 0;
//   while (head !== null) {
//     num = (num << 1) + head.val;
//     head = head.next;
//   }
//   return num;
// }

// function getDecimalValue(head: ListNode | null): number {
//   let num = 0;
//   while (head !== null) {
//     num = num * 2 + head.val;
//     head = head.next;
//   }
//   return num;
// }

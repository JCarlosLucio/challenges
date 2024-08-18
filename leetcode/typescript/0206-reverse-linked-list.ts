import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/reverse-linked-list/
 *
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

/** Recursive
 *
 * @param {ListNode | null} head
 * @param {ListNode | null} parent
 * @returns {ListNode | null}
 */
// function reverseList(
//   head: ListNode | null,
//   parent: ListNode | null = null
// ): ListNode | null {
//   if (!head) {
//     return parent;
//   }

//   const next = head.next;
//   head.next = parent;

//   return reverseList(next, head);
// }

console.log(reverseList(createList([1, 2, 3, 4, 5]))); // [5,4,3,2,1]
console.log(reverseList(createList([1, 2]))); // [2,1]
console.log(reverseList(createList([]))); // []

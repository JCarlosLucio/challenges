import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/remove-linked-list-elements/
 *
 * @param {ListNode | null} head
 * @param {number} val
 * @returns {ListNode | null}
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let node = head;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head?.val === val ? head.next : head;
}

console.log(removeElements(createList([1, 2, 6, 3, 4, 5, 6]), 6)); // [1,2,3,4,5]
console.log(removeElements(createList([]), 1)); // []
console.log(removeElements(createList([7, 7, 7, 7]), 7)); // []
console.log(removeElements(createList([1, 2]), 1)); // [2]

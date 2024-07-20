import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;
  while (node) {
    if (node.val === node.next?.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
}

console.log(deleteDuplicates(createList([1, 1, 2]))); // [1,2]
console.log(deleteDuplicates(createList([1, 1, 2, 3, 3]))); // [1,2,3]
console.log(deleteDuplicates(createList([1, 1, 1]))); // [1]

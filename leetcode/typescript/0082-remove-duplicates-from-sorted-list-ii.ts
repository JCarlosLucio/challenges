import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 *
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  const root = new ListNode(0, head);
  let pre = root;
  let node: ListNode | null = pre;

  while (node) {
    while (node.val === node.next?.val) {
      node = node.next;
    }

    if (pre.next === node) {
      pre = node;
    } else {
      pre.next = node.next;
    }

    node = node.next;
  }

  return root.next;
}

console.log(deleteDuplicates(createList([1, 2, 3, 3, 4, 4, 5]))); // [1,2,5]
console.log(deleteDuplicates(createList([1, 1, 1, 2, 3]))); // [2,3]

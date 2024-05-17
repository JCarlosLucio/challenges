import { ListNode, createList } from './data-structures/list-node';

/** https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * @param {ListNode | null} head
 * @param {number} n
 * @returns {ListNode | null}
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 0;
  let node = head;
  const nodes: Record<string, ListNode> = {};

  while (node) {
    nodes[count] = node;
    node = node.next;
    count++;
  }

  if (nodes[count - n - 1]) {
    nodes[count - n - 1].next = nodes[count - n].next;
  } else {
    head = nodes[count - n].next;
  }

  return head;
}

console.log(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2)); // [1, 2, 3, 5]
console.log(removeNthFromEnd(createList([1]), 1)); // []
console.log(removeNthFromEnd(createList([1, 2]), 1)); // [1]
console.log(removeNthFromEnd(createList([1, 2]), 2)); // [2]

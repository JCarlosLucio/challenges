import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Swap Nodes in Pairs
 *
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    // save pointers
    const nextPair = curr.next.next;
    const second = curr.next;

    // reverse pair
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    // update pointers
    prev = curr;
    curr = nextPair;
  }

  return dummy.next;
}

console.log(swapPairs(createList([1, 2, 3, 4]))); // [2,1,4,3]

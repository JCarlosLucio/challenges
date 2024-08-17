import { createList, ListNode } from './data-structures/list-node';

/** https://leetcode.com/problems/linked-list-cycle/
 *
 * @param {ListNode | null} head
 * @returns {boolean}
 */
function hasCycle(head: ListNode | null): boolean {
  let slow = head?.next ?? null;
  let fast = head?.next?.next ?? null;

  while (slow && fast) {
    if (slow === fast) {
      return true;
    }

    slow = slow?.next ?? null;
    fast = fast?.next?.next ?? null;
  }

  return false;
}

const list1 = createList([3, 2, 0, -4])!;
list1.next!.next!.next!.next! = list1.next!;
console.log(hasCycle(list1)); // true

const list2 = createList([1, 2])!;
list2.next!.next = list2;
console.log(hasCycle(list2)); // true

console.log(hasCycle(createList([1]))); // false
console.log(hasCycle(createList([1, 1, 1, 1]))); // false

import { ListNode, createList } from './data-structures/list-node';

/** https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode | null} l1
 * @param {ListNode | null} l2
 * @returns {ListNode | null}
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let cur = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1?.val || 0;
    const val2 = l2?.val || 0;

    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);

    cur = cur.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return head.next;
}

console.log(addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4]))); // [7,0,8]
console.log(addTwoNumbers(createList([0]), createList([0]))); // [0]
console.log(
  addTwoNumbers(createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9]))
); // [8,9,9,9,0,0,0,1]

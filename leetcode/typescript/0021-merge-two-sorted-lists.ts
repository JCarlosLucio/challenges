import { ListNode, createList } from './data-structures/list-node';

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const root: ListNode = new ListNode();
  let node = root;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }

    node = node.next;
  }

  if (list1) node.next = list1;
  if (list2) node.next = list2;

  return root.next;
}

console.log(mergeTwoLists(createList([1, 2, 4]), createList([1, 3, 4])));
console.log(mergeTwoLists(createList([]), createList([])));
console.log(mergeTwoLists(createList([]), createList([0])));

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createList(arr: number[]): ListNode | null {
  if (arr.length < 1) {
    return null;
  }
  const root = new ListNode(arr.shift());

  let node = root;
  for (const el of arr) {
    node.next = new ListNode(el);
    node = node.next;
  }

  return root;
}

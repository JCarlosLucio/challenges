export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createTree(arr: (number | null)[]): TreeNode {
  const root = new TreeNode(arr.shift() ?? 0);

  const queue = [root];

  while (queue.length > 0 && arr.length > 0) {
    const current = queue.shift()!;

    const leftVal = arr.shift();
    const rightVal = arr.shift();

    if (leftVal) {
      current.left = new TreeNode(leftVal);
      queue.push(current.left);
    }
    if (rightVal) {
      current.right = new TreeNode(rightVal);
      queue.push(current.right);
    }
  }

  return root;
}

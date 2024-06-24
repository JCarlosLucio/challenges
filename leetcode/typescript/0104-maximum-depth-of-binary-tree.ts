import { TreeNode, createTree } from './data-structures/tree-node';

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepth(createTree([1, null, 2]))); // 2

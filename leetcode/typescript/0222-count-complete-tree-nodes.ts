import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/count-complete-tree-nodes/
 *
 * @param {TreeNode | null} root
 * @returns {number}
 */
function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}

console.log(countNodes(createTree([1, 2, 3, 4, 5, 6]))); // 6
console.log(countNodes(createTree([]))); // 0
console.log(countNodes(createTree([1]))); // 1

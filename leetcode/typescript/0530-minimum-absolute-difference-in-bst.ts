import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 *
 * @param {TreeNode | null} root
 * @returns {number}
 */
function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  let last = -Infinity;

  function dfs(node: TreeNode | null): void {
    if (!node) {
      return;
    }

    dfs(node.left);
    min = Math.min(min, node.val - last);
    last = node.val;
    dfs(node.right);
  }

  dfs(root);

  return min;
}

console.log(getMinimumDifference(createTree([4, 2, 6, 1, 3]))); // 1
console.log(getMinimumDifference(createTree([1, 0, 48, null, null, 12, 49]))); // 1

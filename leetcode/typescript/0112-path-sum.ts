import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/path-sum/
 *
 * @param {TreeNode | null} root
 * @param {number} targetSum
 * @returns {boolean}
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  if (!root.right && !root.left && targetSum - root.val === 0) {
    return true;
  }

  return (
    hasPathSum(root.right, targetSum - root.val) ||
    hasPathSum(root.left, targetSum - root.val)
  );
}

console.log(
  hasPathSum(
    createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
    22
  )
); // true
console.log(hasPathSum(createTree([1, 2, 3]), 5)); // false
console.log(hasPathSum(createTree([]), 0)); // false

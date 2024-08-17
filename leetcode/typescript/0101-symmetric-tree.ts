import { TreeNode, createTree } from './data-structures/tree-node';

/** https://leetcode.com/problems/symmetric-tree/
 *
 * @param {TreeNode | null} root
 * @returns  {boolean}
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left || !right) {
    return left === right;
  }

  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}

console.log(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))); // true
console.log(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))); // false

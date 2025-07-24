import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/subtree-of-another-tree/
 *
 * 572. Subtree of Another Tree
 * Easy
 *
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @returns {boolean}
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 === null && t2 === null) {
    return true;
  }
  if (t1 === null || t2 === null) {
    return false;
  }
  if (t1.val !== t2.val) {
    return false;
  }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}

console.log(isSubtree(createTree([3, 4, 5, 1, 2]), createTree([4, 1, 2]))); // true
console.log(
  isSubtree(
    createTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    createTree([4, 1, 2])
  )
); // false

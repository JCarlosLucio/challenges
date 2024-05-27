import { TreeNode, createTree } from './data-structures/tree-node';

/** https://leetcode.com/problems/same-tree/
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @returns {boolean}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if ((p === null && q !== null) || (p !== null && q === null)) {
    return false;
  }

  if (p && q) {
    const isLeftSame = isSameTree(p.left, q.left);
    const isRightSame = isSameTree(p.right, q.right);

    return p.val === q.val && isLeftSame && isRightSame;
  }

  return false;
}

console.log(isSameTree(createTree([1, 2, 3]), createTree([1, 2, 3]))); // true
console.log(isSameTree(createTree([1, 2]), createTree([1, null, 2]))); // false
console.log(isSameTree(createTree([1, 2, 1]), createTree([1, 1, 2]))); // false

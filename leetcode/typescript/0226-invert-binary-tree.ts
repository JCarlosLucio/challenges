import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/invert-binary-tree/
 *
 * @param {TreeNode | null}root
 * @returns {TreeNode | null}
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))); // [4,7,2,9,6,3,1]
console.log(invertTree(createTree([2, 1, 3]))); // [2,3,1]
console.log(invertTree(createTree([]))); // []

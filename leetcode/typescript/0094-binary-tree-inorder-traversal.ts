import { createTree, TreeNode } from './data-structures/tree-node';
/**
 *
 * @param {TreeNode | null} root
 * @param {number[]} list
 * @returns {number[]}
 */
function inorderTraversal(
  root: TreeNode | null,
  list: number[] = []
): number[] {
  if (!root) return [];

  inorderTraversal(root.left, list);
  list.push(root.val);
  inorderTraversal(root.right, list);

  return list;
}

console.log(inorderTraversal(createTree([1, null, 2, 3]))); // [1,3,2]
console.log(inorderTraversal(createTree([]))); // []
console.log(inorderTraversal(createTree([1]))); // [1]

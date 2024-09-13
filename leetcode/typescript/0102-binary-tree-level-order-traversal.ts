import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/binary-tree-level-order-traversal/
 *  Binary Tree BFS
 *
 * @param {TreeNode | null} root
 * @returns {number[][]}
 */
function levelOrder(root: TreeNode | null): number[][] {
  const levels: number[][] = [];

  function getHeight(node: TreeNode | null, height: number) {
    if (!node) return 0;

    if (node.left || node.right) {
      getHeight(node.left, height + 1);
      getHeight(node.right, height + 1);
    }

    if (levels[height]) {
      levels[height].push(node.val);
    } else {
      levels[height] = [node.val];
    }
  }

  getHeight(root, 0);

  return levels;
}

console.log(levelOrder(createTree([3, 9, 20, null, null, 15, 7]))); // [[3],[9,20],[15,7]]
console.log(levelOrder(createTree([1]))); // [[1]]
console.log(levelOrder(createTree([]))); // []

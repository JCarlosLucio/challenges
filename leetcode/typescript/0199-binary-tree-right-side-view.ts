import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  if (!root) {
    return ans;
  }

  dfs(root, ans, 0);

  return ans;
}

function dfs(node: TreeNode | null, ans: number[], depth: number) {
  if (!node) {
    return;
  }

  ans[depth] = node.val;
  dfs(node.left, ans, depth + 1);
  dfs(node.right, ans, depth + 1);
}

console.log(rightSideView(createTree([1, 2, 3, null, 5, null, 4]))); // [1, 3, 4]
console.log(rightSideView(createTree([1, null, 3]))); // [1, 3]
console.log(rightSideView(createTree([]))); // []
console.log(rightSideView(createTree([1, 2]))); // [1, 2]

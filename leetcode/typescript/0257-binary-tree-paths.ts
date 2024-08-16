import { TreeNode, createTree } from './data-structures/tree-node';

/** https://leetcode.com/problems/binary-tree-paths/
 *
 * @param {TreeNode | null} root
 * @returns {string[]}
 */
function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  if (!root) {
    return res;
  }

  bfs(root, '', res);

  return res;
}

function bfs(node: TreeNode, str: string, res: string[]) {
  if (!node.left && !node.right) {
    str += node.val;
    res.push(str);
  } else {
    str += node.val + '->';
    if (node.left) {
      bfs(node.left, str, res);
    }
    if (node.right) {
      bfs(node.right, str, res);
    }
  }
}

console.log(binaryTreePaths(createTree([1, 2, 3, null, 5]))); // ["1->2->5","1->3"]
console.log(binaryTreePaths(createTree([1]))); // ["1"]

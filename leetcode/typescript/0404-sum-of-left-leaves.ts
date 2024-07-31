import { TreeNode, createTree } from './data-structures/tree-node';

/** https://leetcode.com/problems/sum-of-left-leaves/
 *
 * @param {TreeNode | null} root
 * @returns {number}
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let stack = [root];
  let result = 0;
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      return result;
    }
    if (node.left) {
      stack.push(node.left);
      if (!node.left.left && !node.left.right) {
        result += node.left.val;
      }
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
}

console.log(sumOfLeftLeaves(createTree([3, 9, 20, null, null, 15, 7]))); // 24
console.log(sumOfLeftLeaves(createTree([1]))); // 0
console.log(sumOfLeftLeaves(createTree([1, 2, 3, 4, 5]))); // 4

import { createTree, TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/average-of-levels-in-binary-tree/
 *
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
function averageOfLevels(root: TreeNode | null): number[] {
  const queue = [root];
  const avgs: number[] = [];

  while (queue.length) {
    const len = queue.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node) {
        sum += node.val;

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    avgs.push(sum / len);
  }

  return avgs;
}

console.log(averageOfLevels(createTree([3, 9, 20, null, null, 15, 7]))); // [3.00000,14.50000,11.00000]
console.log(averageOfLevels(createTree([3, 9, 20, 15, 7]))); // [3.00000,14.50000,11.00000]
console.log(averageOfLevels(createTree([3, 1, 5, 0, 2, 4, 6]))); // [3.00000,3.00000,3.00000]

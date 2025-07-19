import { TreeNode } from './data-structures/tree-node';

/** https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * 108. Convert Sorted Array to Binary Search Tree
 * Easy
 *
 * @param {number[]} nums
 * @returns {TreeNode | null}
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length <= 0) {
    return null;
  }

  const midIdx = Math.floor(nums.length / 2);

  return new TreeNode(
    nums[midIdx],
    sortedArrayToBST(nums.slice(0, midIdx)),
    sortedArrayToBST(nums.slice(midIdx + 1))
  );
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0,-3,9,-10,null,5] or [0,-10,5,null,-3,null,9]
console.log(sortedArrayToBST([1, 3])); // [1,null,3] or [3,1]

/** https://leetcode.com/problems/subsets/
 *
 * 78. Subsets
 * Medium
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(i: number) {
    if (i > nums.length - 1) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[i]!);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }
  dfs(0);

  return res;
}

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[], [0]];

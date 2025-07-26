/** https://leetcode.com/problems/permutations-ii/
 *
 * 47. Permutations II
 * Medium
 * Solution: sorting + backtracking
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  const used = new Set<number>();

  function dfs(perms: number[]) {
    if (perms.length === nums.length) {
      res.push([...perms]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used.has(i)) {
        continue;
      }
      // avoid duplicate permutations
      if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) {
        continue;
      }

      used.add(i);
      perms.push(nums[i]!);
      dfs(perms);
      perms.pop();
      used.delete(i);
    }
  }
  dfs([]);

  return res;
}

console.log(permuteUnique([1, 1, 2])); // [[1,1,2], [1,2,1], [2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

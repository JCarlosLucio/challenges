/** https://leetcode.com/problems/jump-game-ii/
 *
 * 45. Jump Game II
 * Medium
 *
 * @param {number[]} nums
 * @returns {number}
 */
function jump(nums: number[]): number {
  let res = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + nums[i]!);
    }
    left = right + 1;
    right = farthest;
    res++;
  }

  return res;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2

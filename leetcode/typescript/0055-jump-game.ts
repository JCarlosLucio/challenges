/** https://leetcode.com/problems/jump-game
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums: number[]): boolean {
  let furthest = nums[0];
  let jumps = furthest;
  for (let i = 0; i < nums.length; i++) {
    if (furthest >= nums.length - 1) return true;
    if (jumps < 0) return false;
    if (furthest < i + nums[i]) {
      furthest = Math.max(furthest, i + nums[i]);
      jumps = furthest;
    }
    jumps--;
  }
  return false;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([5, 4, 0, 2, 0, 1, 0, 1, 0])); // false

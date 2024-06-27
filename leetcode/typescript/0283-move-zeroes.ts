/** https://leetcode.com/problems/move-zeroes/
 *
 * @param {number[]} nums
 * @return {void}
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[left];
      nums[left] = nums[i];
      nums[i] = temp;
      left++;
    }
  }
  console.log(nums);
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

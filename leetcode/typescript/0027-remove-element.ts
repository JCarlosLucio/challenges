/** https://leetcode.com/problems/remove-element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1];
      nums.pop();
    } else {
      i++;
    }
  }

  return nums.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

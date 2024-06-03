/** https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums: number[]): number {
  let m = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      m = nums[i];
      count = 1;
    } else if (nums[i] === m) {
      count++;
    } else {
      count--;
    }
  }

  return m;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

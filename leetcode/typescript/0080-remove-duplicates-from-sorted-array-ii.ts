/** https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums: number[]): number {
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

console.log(removeDuplicates2([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]));

/** https://leetcode.com/problems/contains-duplicate-ii/
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const j = numsMap.get(num);

    if (j !== undefined && Math.abs(j - i) <= k) {
      return true;
    }

    numsMap.set(num, i);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false

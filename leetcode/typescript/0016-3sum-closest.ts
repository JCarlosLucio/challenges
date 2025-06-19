/** https://leetcode.com/problems/3sum-closest/
 *
 * 3Sum Closest
 *
 * @param {number} nums
 * @returns {number[][]}
 */
function threeSumClosest(nums: number[], target: number): number {
  let closest = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    // skip duplicates
    if (i > 0 && num === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = num + nums[left]! + nums[right]!;
      const diff = target - sum;

      if (Math.abs(diff) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (diff < 0) {
        right--;
      } else if (diff > 0) {
        left++;
      } else {
        return sum;
      }
    }
  }

  return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1)); // 60

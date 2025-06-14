/** https://leetcode.com/problems/3sum/
 *
 * 3Sum
 *
 * @param {number} nums
 * @returns {number[][]}
 */
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
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

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([num, nums[left]!, nums[right]!]);
        left++;

        // skip duplicates again
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-1, 0, 1, 0])); // [[-1,0,1]]
console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
); // [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]

/** https://leetcode.com/problems/product-of-array-except-self
 * @param {number[]} nums
 * @returns {number[]}
 */

function productExceptSelf(nums: number[]): number[] {
  const prods: number[] = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    prods[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    prods[i] *= product;
    product *= nums[i];
  }

  return prods;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

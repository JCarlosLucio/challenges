/** https://leetcode.com/problems/next-greater-element-i/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const idxs = nums1.reduce(
    (acc, cur, i) => acc.set(cur, i),
    new Map<number, number>()
  );

  const ans = new Array(nums1.length).fill(-1);
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length && num > stack.at(-1)!) {
      const cur = stack.pop()!;
      const idx = idxs.get(cur)!;
      ans[idx] = num;
    }

    if (idxs.has(num)) {
      stack.push(num);
    }
  }

  return ans;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]

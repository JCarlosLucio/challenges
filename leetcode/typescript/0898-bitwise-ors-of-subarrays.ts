/** https://leetcode.com/problems/bitwise-ors-of-subarrays/
 *
 * 898. Bitwise ORs of Subarrays
 * Medium
 *
 * @param {number[]} arr
 * @returns {number}
 */
function subarrayBitwiseORs(arr: number[]): number {
  let res = new Set<number>();
  let seen = new Set<number>();

  for (const num of arr) {
    const curr = new Set<number>();
    curr.add(num);
    res.add(num);
    for (const OR of seen) {
      curr.add(OR | num);
      res.add(OR | num);
    }

    seen = curr;
  }

  return res.size;
}

console.log(subarrayBitwiseORs([0])); // 1
console.log(subarrayBitwiseORs([1, 1, 2])); // 3
console.log(subarrayBitwiseORs([1, 2, 4])); // 6

// function subarrayBitwiseORs(arr: number[]): number {
//   let res = new Set<number>();
//   let seen = new Set<number>();

//   for (const num of arr) {
//     const curr = new Set<number>();
//     curr.add(num);

//     for (const OR of seen) {
//       curr.add(OR | num);
//     }

//     seen = curr;
//     res = res.union(seen); // ESNEXT or new Set([...res, ...seen])
//   }

//   return res.size;
// }

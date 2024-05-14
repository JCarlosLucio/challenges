/** https://www.codewars.com/kata/54da5a58ea159efa38000836
 *
 * Find the odd int. Find the one that appears an odd number of times
 *
 * @param {number[]}xs
 * @returns {number}
 */
const findOdd = (xs: number[]): number => {
  const numsCount = xs.reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  for (const key in numsCount) {
    if (numsCount[key] & 1) return Number(key);
  }
  return 0;
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1

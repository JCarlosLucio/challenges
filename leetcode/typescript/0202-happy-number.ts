/** https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @returns {boolean}
 */
function isHappy(n: number): boolean {
  const results = new Set();

  function helper(num: number): boolean {
    if (num === 1) {
      return true;
    }
    if (results.has(num)) {
      return false;
    }

    const result: number = num
      .toString()
      .split('')
      .reduce((acc, cur) => acc + parseInt(cur, 10) ** 2, 0);

    results.add(num);

    return helper(result);
  }

  return helper(n);
}

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(7)); // true

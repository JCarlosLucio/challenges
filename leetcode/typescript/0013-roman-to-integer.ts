/** https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @returns {number}
 */
function romanToInt(s: string): number {
  const nums = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;
  let last = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const roman = s[i];
    const num = nums[roman];

    if (num < last) {
      result -= num;
    } else {
      result += num;
    }

    last = num;
  }

  return result;
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994

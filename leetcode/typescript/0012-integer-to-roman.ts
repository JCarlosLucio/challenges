/** https://leetcode.com/problems/integer-to-roman/
 *
 * @param {number} num
 * @returns {string}
 */
function intToRoman(num: number): string {
  const nums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';
  for (const roman in nums) {
    const times = Math.floor(num / nums[roman]);
    result += roman.repeat(times);
    num = num % nums[roman];

    if (num <= 0) {
      return result;
    }
  }

  return result;
}

console.log(intToRoman(3749)); // MMMDCCXLIX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV

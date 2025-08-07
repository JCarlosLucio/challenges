/** https://leetcode.com/problems/multiply-strings/
 *
 * 43. Multiply Strings
 * Medium
 *
 *
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
function multiply(num1: string, num2: string): string {
  if ([num1, num2].includes('0')) {
    return '0';
  }

  const res: number[] = [];
  const nums1 = [...num1].reverse().map(Number);
  const nums2 = [...num2].reverse().map(Number);

  for (let i1 = 0; i1 < nums1.length; i1++) {
    for (let i2 = 0; i2 < nums2.length; i2++) {
      const digit = nums1[i1]! * nums2[i2]! + (res[i1 + i2] ?? 0);
      res[i1 + i2] = digit % 10;
      res[i1 + i2 + 1] = (res[i1 + i2 + 1] ?? 0) + Math.floor(digit / 10);
    }
  }

  let end = res.length - 1;
  while (res[end]! <= 0 && end > 0) {
    res.pop();
    end--;
  }

  return res.reverse().map(String).join('');
}

console.log(multiply('2', '3')); // "6"
console.log(multiply('123', '456')); // "56088"

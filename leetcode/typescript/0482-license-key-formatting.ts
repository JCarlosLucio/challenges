/** https://leetcode.com/problems/license-key-formatting/
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function licenseKeyFormatting(s: string, k: number): string {
  const chars = s.replaceAll('-', '').toUpperCase().split('');
  chars.reverse();
  let ans = '';
  for (let i = 0; i < chars.length; i++) {
    if (i % k === 0 && i !== 0) {
      ans = '-' + ans;
    }

    const section = chars[i];
    if (section) {
      ans = section + ans;
    }
  }

  return ans;
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4)); //  "5F3Z-2E9W"
console.log(licenseKeyFormatting('2-5g-3-J', 2)); //  "2-5G-3J"
console.log(licenseKeyFormatting('2-4A0r7-4k', 4)); //  "24A0-R74K"

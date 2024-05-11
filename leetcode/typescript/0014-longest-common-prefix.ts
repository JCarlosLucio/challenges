/** https://leetcode.com/problems/longest-common-prefix
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs: string[]): string {
  let [prefix, ...rest] = strs;

  for (const str of rest) {
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== str[i]) {
        prefix = prefix.substring(0, i);
        break;
      }
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""

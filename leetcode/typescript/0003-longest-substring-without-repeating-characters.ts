/** https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  const seen: Record<string, number> = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

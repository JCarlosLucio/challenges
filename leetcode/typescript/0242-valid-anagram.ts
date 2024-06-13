/** https://leetcode.com/problems/valid-anagram
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const sQty = sMap.get(sChar) ?? 0;

    sMap.set(sChar, sQty + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    const tQty = sMap.get(tChar);

    if (!tQty) return false;

    sMap.set(tChar, tQty - 1);
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false

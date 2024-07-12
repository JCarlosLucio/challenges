/** https://leetcode.com/problems/reverse-vowels-of-a-string/
 *
 * @param {string} s
 * @returns {string}
 */
function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let start = 0;
  let end = s.length - 1;

  const res = [...s];
  while (start < end) {
    const startIsVowel = vowels.has(res[start].toLowerCase());
    const endIsVowel = vowels.has(res[end].toLowerCase());
    if (!startIsVowel) {
      start++;
    }
    if (!endIsVowel) {
      end--;
    }
    if (startIsVowel && endIsVowel) {
      const temp = res[start];
      res[start] = res[end];
      res[end] = temp;

      start++;
      end--;
    }
  }

  return res.join('');
}

console.log(reverseVowels('hello')); // holle
console.log(reverseVowels('leetcode')); // leotcede

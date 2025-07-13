/** https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/
 *
 * 3304. Find the K-th Character in String Game I
 * Easy
 *
 * @param {number} k
 * @returns {string}
 */
function kthCharacter(k: number): string {
  let ans = 0;

  while (k !== 1) {
    let t = 31 - Math.clz32(k);
    if (1 << t === k) {
      t--;
    }
    k -= 1 << t;
    ans++;
  }

  return String.fromCharCode('a'.charCodeAt(0) + ans);
}

console.log(kthCharacter(5)); // "b"
console.log(kthCharacter(10)); // "c"

// function kthCharacter(k: number): string {
//   let word = 'a';

//   while (word.length <= k) {
//     let next = '';

//     for (const char of word) {
//       next += getNextChar(char);
//     }
//     word += next;
//   }

//   return word[k - 1]!;
// }

// function getNextChar(char: string): string {
//   const code = char.charCodeAt(0) + 1;
//   if (code > 122) {
//     return 'a';
//   }
//   return String.fromCharCode(code);
// }

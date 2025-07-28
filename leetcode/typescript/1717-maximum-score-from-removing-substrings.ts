/** https://leetcode.com/problems/maximum-score-from-removing-substrings/
 *
 * 1717. Maximum Score From Removing Substrings
 * Medium
 *
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function maximumGain(s: string, x: number, y: number): number {
  function removePairs(pair: string, score: number) {
    let gain = 0;
    const stack: string[] = [];

    for (const char of s) {
      if (char === pair[1] && stack.length && stack.at(-1) === pair[0]) {
        stack.pop();
        gain += score;
      } else {
        stack.push(char);
      }
    }

    s = stack.join('');

    return gain;
  }

  let total = 0;
  let first = 'ab';
  let second = 'ba';
  if (y > x) {
    [first, second] = [second, first];
    [x, y] = [y, x];
  }

  total += removePairs(first, x);
  total += removePairs(second, y);

  return total;
}

console.log(maximumGain('cdbcbbaaabab', 4, 5)); // 19
console.log(maximumGain('aabbaaxybbaabb', 5, 4)); // 20

// function maximumGain(s: string, x: number, y: number): number {
//   let score = 0;
//   let first = 'ab';
//   let second = 'ba';
//   if (y > x) {
//     [first, second] = [second, first];
//     [x, y] = [y, x];
//   }

//   while (s.indexOf(first) !== -1) {
//     score += x;
//     s = s.replace(first, '');
//   }
//   while (s.indexOf(second) !== -1) {
//     score += y;
//     s = s.replace(second, '');
//   }

//   return score;
// }

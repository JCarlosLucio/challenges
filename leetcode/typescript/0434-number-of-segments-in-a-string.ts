/** https://leetcode.com/problems/number-of-segments-in-a-string/
 *
 * @param {string} s
 * @returns {number}
 */
function countSegments(s: string): number {
  s = s.trim();
  if (!s) return 0;
  return s.split(/\s+/).length;
}

console.log(countSegments('Hello, my name is John')); // 5
console.log(countSegments('Hello')); // 1
console.log(countSegments('      ')); // 0
console.log(countSegments('')); // 0

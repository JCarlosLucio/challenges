/** https://leetcode.com/problems/count-and-say/
 *
 * Count and Say
 *
 * @param {number} n
 * @returns {string}
 */
function countAndSay(n: number): string {
  let start = '1';

  for (let i = 1; i < n; i++) {
    start = say(count(start));
  }

  return start;
}

function count(nums: string): number[][] {
  const result: number[][] = [];

  let curr = nums[0]!;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    if (num === curr) {
      count++;
    } else {
      result.push([Number(curr), count]);
      curr = num;
      count = 1;
    }
  }
  result.push([Number(curr), count]);

  return result;
}

function say(nums: number[][]): string {
  let result = '';

  for (let i = 0; i < nums.length; i++) {
    const [curr = 0, count = 0] = nums[i]!;
    result += '' + count + curr;
  }

  return result;
}

console.log(count('223314444411')); // [[2,2], [3,2], [1,1], [4,5], [1, 2]]
console.log(
  say([
    [2, 2],
    [3, 2],
    [1, 1],
    [4, 5],
    [1, 2],
  ])
); // '2223115421'

console.log(countAndSay(4)); // "1211"
console.log(countAndSay(1)); // "1"

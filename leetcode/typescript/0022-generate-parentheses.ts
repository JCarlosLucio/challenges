/** https://leetcode.com/problems/generate-parentheses/
 *
 * @param {number} n
 * @returns {string[]}
 */
function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const stack: string[] = [];

  const backtrack = (openN: number, closeN: number) => {
    if (openN === n && closeN === n) {
      res.push(stack.join(''));
      return;
    }

    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closeN);
      stack.pop();
    }

    if (closeN < openN) {
      stack.push(')');
      backtrack(openN, closeN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);

  return res;
}

console.log(generateParenthesis(4));
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));

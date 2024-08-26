/** https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * @param {string[]} tokens
 * @returns {number}
 */
function evalRPN(tokens: string[]): number {
  const operations: Record<string, (a: number, b: number) => number> = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.trunc(a / b),
  };

  const stack: number[] = [];

  for (const token of tokens) {
    const operation = operations[token];
    if (operation) {
      const b = stack.pop();
      const a = stack.pop();
      if (a !== undefined && b !== undefined) {
        stack.push(operation(a, b));
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop() ?? 0;
}

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
); // 22

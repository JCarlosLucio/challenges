/** https://leetcode.com/problems/min-stack/
 *
 */
class MinStack {
  stack: Map<string, number>[];
  min: number;

  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val: number): void {
    const value = new Map<string, number>();
    value.set('val', val);
    value.set('min', this.min);
    this.min = Math.min(this.min, val);
    this.stack.push(value);
  }

  pop(): void {
    const value = this.stack.pop()!;
    if (value.get('val') === this.min) {
      this.min = value.get('min')!;
    }
  }

  top(): number {
    return this.stack.at(-1)!.get('val')!;
  }

  getMin(): number {
    return this.min;
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2

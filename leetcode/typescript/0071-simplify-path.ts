/** https://leetcode.com/problems/simplify-path/
 *
 * @param {string} path
 * @returns {string}
 */
function simplifyPath(path: string): string {
  const dirs = path.split('/');
  const stack: string[] = [];

  for (const dir of dirs) {
    if (dir === '..') {
      stack.pop();
    }
    if (dir && dir !== '..' && dir !== '.') {
      stack.push(dir);
    }
  }

  return '/' + stack.join('/');
}

console.log(simplifyPath('/home/')); // "/home"
console.log(simplifyPath('/home//foo/')); // "/home/foo"
console.log(simplifyPath('/home/user/Documents/../Pictures')); // "/home/user/Pictures"
console.log(simplifyPath('/../')); // "/"
console.log(simplifyPath('/.../a/../b/c/../d/./')); // "/.../b/d"

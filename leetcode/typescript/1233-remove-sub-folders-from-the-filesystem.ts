/** https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
 *
 * 1233. Remove Sub-Folders from the Filesystem
 * Medium
 *
 * @param {string[]} folder
 * @returns {string[]}
 */
function removeSubfolders(folder: string[]): string[] {
  folder.sort();
  const res: string[] = [];
  let prev = folder[0];

  for (const dir of folder) {
    if (!dir.startsWith(prev + '/')) {
      res.push(dir);
      prev = dir;
    }
  }

  return res;
}

console.log(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'])); // ["/a","/c/d","/c/f"]
console.log(removeSubfolders(['/a', '/a/b/c', '/a/b/d'])); // ["/a"]
console.log(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d'])); // ["/a/b/c","/a/b/ca","/a/b/d"]

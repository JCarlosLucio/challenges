#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using std::string;
using std::unordered_map;
using std::vector;

const unordered_map<char, char> opening{
    {'(', ')'},
    {'[', ']'},
    {'{', '}'},
};

const unordered_map<char, char> closing{
    {')', '('},
    {']', '['},
    {'}', '{'},
};

class Solution {
 public:
  /**
   * @brief 20. Valid Parantheses
   *
   * https://leetcode.com/problems/valid-parentheses/description/
   * Given a string s containing just the characters '(', ')', '{', '}', '[' and
   * ']', determine if the input string is valid
   * Easy
   *
   * @param s
   * @return whether is valid or not
   */
  bool isValid(string s) {
    vector<char> stack{};

    for (auto& ch : s) {
      if (opening.contains(ch)) {
        stack.push_back(ch);
      }
      if (closing.contains(ch)) {
        if (stack.empty() || closing.at(ch) != stack.back()) {
          return false;
        } else {
          stack.pop_back();
        }
      }
    }

    return stack.empty();
  }
};

int main() {
  Solution sol{};

  std::cout << sol.isValid("()") << '\n';      // 1
  std::cout << sol.isValid("()[]{}") << '\n';  // 1
  std::cout << sol.isValid("(]") << '\n';      // 0
  std::cout << sol.isValid("([])") << '\n';    // 1
  std::cout << sol.isValid("([)]") << '\n';    // 0

  return 0;
}

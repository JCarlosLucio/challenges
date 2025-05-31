/** https://leetcode.com/problems/reverse-integer/
 *
 * Reverse Integer
 *
 *
 */

#include <climits>

class Solution {
public:
    int reverse(int x) {
        int rev{0};

        while (x != 0) {
            if (rev > INT_MAX / 10 || rev < INT_MIN / 10) {
                return 0;
            }

            rev = rev * 10 + x % 10;

            x /= 10;
        }

        return rev;
    }
};

int main() {
    Solution().reverse(123);          // 321
    Solution().reverse(-123);         // -321
    Solution().reverse(120);          // 21
    Solution().reverse(1534236469);   // 0
    Solution().reverse(-2147483648);  // 0

    return 0;
}

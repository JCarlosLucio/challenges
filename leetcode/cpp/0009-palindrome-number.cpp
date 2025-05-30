
// #include <algorithm>
// #include <string>

class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long long rev{0};
        long long y{x};

        while (x > 0) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }

        return rev == y;
    }
};

// class Solution
// public:
//     bool isPalindrome(int x) {
//         if (x < 0) {
//             return false;
//         }
//
//         std::string xString = std::to_string(x);
//         std::string reversedXString{xString};
//         std::ranges::reverse(reversedXString);  // C++20
//
//         return xString.compare(reversedXString) == 0;
//     }
// };

int main() {
    Solution().isPalindrome(121);
    Solution().isPalindrome(-121);
    Solution().isPalindrome(123);
    return 0;
}

#include <unordered_map>
#include <vector>

using std::unordered_map;
using std::vector;

class Solution {
public:
    vector<int> twoSum(vector<int> &nums, int target) {
        unordered_map<int, int> numMap;
        for (int i = 0; i < static_cast<int>(nums.size()); i++) {
            int num{nums[static_cast<size_t>(i)]};
            int complement{target - num};
            if (numMap.count(complement)) {
                return {numMap[complement], i};
            }
            numMap[num] = i;
        }

        return {};
    }
};

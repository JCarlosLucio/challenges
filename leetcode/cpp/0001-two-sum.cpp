#include <vector>
#include <unordered_map>

using std::unordered_map;
using std::vector;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); i++)
    {
      int num{nums[i]};
      int complement{target - num};
      if (numMap.count(complement))
      {

        return {numMap[complement], i};
      }
      numMap[num] = i;
    }

    return {};
  }
};
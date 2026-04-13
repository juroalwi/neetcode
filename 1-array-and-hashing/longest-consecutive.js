/**
 * Given an array of integers nums, return the length of the longest
 * consecutive sequence of elements that can be formed. A consecutive sequence
 * is a sequence of elements in which each element is exactly 1 greater than
 * the previous element. The elements do not have to be consecutive in the
 * original array.
 * 
 * You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [2,20,4,10,3,4,5]
 * Output: 4
 * Explanation: The longest consecutive sequence is [2, 3, 4, 5].
 * 
 * Example 2:
 * Input: nums = [0,3,2,5,4,6,1,1]
 * Output: 7

 * Constraints:
 * 0 <= nums.length <= 1000
 * -10^9 <= nums[i] <= 10^9
 */

// 20, 6, 31, 2, 1, 5, 4, 3
// 3: <- 1, -> 2
// given a starting number k belonging to nums, iterate nums and turn on flags[i] if k <= i < k + nums.length

const longestConsecutive = (nums) => {
  const hasPrev = {};

  for (let num of nums) {
    hasPrev[num + 1] = true;
  }

  let max = 0;
  for (let num of nums) {
    if (hasPrev[num]) {
      continue;
    }

    let next = num + 1;
    while (hasPrev[next + 1]) {
      next++;
    }

    const length = next - num;
    if (length > max) {
      max = length;
    }
  }

  return max;
};

const longestConsecutiveCuadTime = (nums) => {
  const flags = [...new Array(nums.length)].map(() => 0);

  let maxLength = 0;
  for (let start of nums) {
    for (let num of nums) {
      const dif = num - start;
      if (0 <= dif && dif < flags.length) {
        flags[dif] = 1;
      }
    }

    let interrupted = false;
    for (let i = 0; i < flags.length; i++) {
      if (!interrupted && !flags[i]) {
        interrupted = true;
      }
      if (!interrupted && i + 1 > maxLength) {
        maxLength = i + 1;
      }
      flags[i] = 0;
    }
  }

  return maxLength;
};

console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));

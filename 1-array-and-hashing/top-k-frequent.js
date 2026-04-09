/**
 * Top K Frequent Elements
 * Medium
 * Topics
 * Company Tags
 * Hints
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 *
 * The test cases are generated such that the answer is always unique.
 *
 * You may return the output in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,2,2,3,3,3], k = 2
 *
 * Output: [2,3]
 * Example 2:
 *
 * Input: nums = [7,7], k = 1
 *
 * Output: [7]
 * Constraints:
 *
 * 1 <= nums.length <= 10^4.
 * -1000 <= nums[i] <= 1000
 * 1 <= k <= number of distinct elements in nums.
 */

// Bucket sort approach.
const topKFrequent = (nums, k) => {
  const response = [];
  const freqsPerNum = {}; // frequency for each number;
  const numsPerFreq = [...new Array(nums.length)].map(() => []); // store the numbers corresponding to each possible frequency (possible frequencies are from 1 to nums.length);

  for (let num of nums) {
    freqsPerNum[num] = (freqsPerNum[num] || 0) + 1;
  }

  for (let [num, freq] of Object.entries(freqsPerNum)) {
    numsPerFreq[freq - 1].push(Number(num));
  }

  let i = nums.length - 1;
  while (i >= 0 && response.length < k) {
    const iFreqNums = numsPerFreq[i];
    if (iFreqNums.length > 0) {
      response.push(
        ...iFreqNums.slice(
          Math.max(0, iFreqNums.length - (k - response.length)),
        ),
      ); // if we just push the whole iFreqNums array, we might exceed k elements in our responns;
    }
    i--;
  }

  return response;
};

console.log(
  topKFrequent(
    [
      4, 2, 2, 3, 2, 3, 2, 2, 2, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    ],
    2,
  ),
);

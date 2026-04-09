/**
 * Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
 *
 * Each product is guaranteed to fit in a 32-bit integer.
 *
 * Follow-up: Could you solve it in O(n) time without using the division operation?
 *
 * Example 1:
 * Input: nums = [1,2,4,6]
 * Output: [48,24,12,8]
 *
 * Example 2:
 * Input: nums = [-1,0,1,2,3]
 * Output: [0,-6,0,0,0]
 *
 * Constraints:
 * 2 <= nums.length <= 1000
 * -20 <= nums[i] <= 20
 */

const productExceptSelf = (nums) => {
  const partialProducts = [...new Array(nums.length)].map(() => [1, 1]);

  for (let l = 1; l < nums.length; l++) {
    const r = nums.length - l - 1;
    partialProducts[l][0] = partialProducts[l - 1][0] * nums[l - 1];
    partialProducts[r][1] = partialProducts[r + 1][1] * nums[r + 1];
  }

  return partialProducts.map((el) => el[0] * el[1]);
};

console.log(productExceptSelf([-1, 0, 1, 2, 3]));

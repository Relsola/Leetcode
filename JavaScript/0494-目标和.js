/**
 * @description 动态规划
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
    const sum = nums.reduce((a, b) => a + b);

    /* 
      设加法的总和为 x，那么减法对应的总和就是 sum - x
      x - (sum - x) = target
      x = (target + sum) / 2
    */

    if (Math.abs(target) > sum) {
        return 0;
    }

    if ((target + sum) & 1) {
        return 0;
    }

    const halfSum = (target + sum) / 2;

    const dp = new Array(halfSum + 1).fill(0);
    dp[0] = 1;

    for (let i = 0, n = nums.length; i < n; i++) {
        for (let k = halfSum; k >= nums[i]; k--) {
            dp[k] += dp[k - nums[i]];
        }
    }

    return dp.at(-1);
}

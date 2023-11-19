/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
    const sum = nums.reduce((p, c) => p + c);
    if (sum & 1) {
        return false;
    }

    const halfway = sum / 2;
    const dp = new Array(halfway + 1).fill(0);
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let k = halfway; k >= nums[i]; k--) {
            dp[k] = Math.max(dp[k], dp[k - nums[i]] + nums[i]);
            if (dp[k] === halfway) {
                return true;
            }
        }
    }
    return dp[halfway] === halfway;
}

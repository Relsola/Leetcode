function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0,
        right: number = 0,
        sum: number = 0;

    const n: number = nums.length;
    let result: number = n + 1;

    while (right < n) {
        sum += nums[right];
        if (sum >= target) {
            while (sum - nums[left] >= target) {
                sum -= nums[left++];
            }
            result = Math.min(result, right - left + 1);
        }
        right++;
    }
    return result === n + 1 ? 0 : result;
}

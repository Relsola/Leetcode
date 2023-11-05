/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
	const result = [],
		n = nums.length;
	// 将数组排序
	nums.sort((a, b) => a - b);

	for (let i = 0; i < n - 2; i++) {
		let l = i + 1,
			r = n - 1,
			iNum = nums[i];
		// 数组排过序，如果第一个数大于0直接返回res
		if (iNum > 0) return result;
		// 去重
		if (iNum === nums[i - 1]) continue;

		while (l < r) {
			let lNum = nums[l],
				rNum = nums[r],
				threeSum = iNum + lNum + rNum;

			// 三数之和小于0，则左指针向右移动
			if (threeSum < 0) l++;
			else if (threeSum > 0) r--;
			else {
				result.push([iNum, lNum, rNum]);
				// 去重
				while (l < r && nums[l] === nums[++l]);
				while (l < r && nums[r] === nums[--r]);
			}
		}
	}

	return result;
}

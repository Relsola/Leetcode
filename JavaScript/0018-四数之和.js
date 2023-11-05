/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

function fourSum(nums, target) {
	const result = [],
		n = nums.length;
	if (n < 4) return result;
	nums.sort((a, b) => a - b);

	for (let i = 0; i < n - 3; i++) {
		const iNum = nums[i];
		// 去重i
		if (i > 0 && iNum === nums[i - 1]) continue;

		for (let j = i + 1; j < n - 2; j++) {
			const jNum = nums[j];
			// 去重j
			if (j > i + 1 && jNum === nums[j - 1]) continue;
			let l = j + 1,
				r = n - 1;
			while (l < r) {
				const lNum = nums[l],
					rNum = nums[r],
					fourSum = iNum + jNum + lNum + rNum;

				if (fourSum < target) l++;
				else if (fourSum > target) r--;
				else {
					result.push([iNum, jNum, lNum, rNum]);
					// 对nums[left]和nums[right]去重
					while (l < r && lNum === nums[++l]);
					while (l < r && rNum === nums[--r]);
				}
			}
		}
	}

	return result;
}

// while 循环
function removeElement(nums: number[], val: number): number {
	let fast: number = 0;
	let slow: number = 0;
	const n: number = nums.length;
	while (fast < n) {
		if (nums[fast] === val) {
			fast++;
			continue;
		}
		nums[slow++] = nums[fast++];
	}
	return slow;
}

// for 循环
function removeElementO(nums: number[], val: number): number {
	let k: number = 0;
	for (let i = 0, n = nums.length; i < n; ++i) {
		if (nums[i] === val) {
			continue;
		}
		nums[k++] = nums[i];
	}
	return k;
}

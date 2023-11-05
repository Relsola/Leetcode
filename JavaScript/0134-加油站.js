/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
	const n = gas.length;
	let curSum = 0;
	let min = Infinity;
	for (let i = 0; i < n; i++) {
		let rest = gas[i] - cost[i];
		curSum += rest;
		if (curSum < min) {
			min = curSum;
		}
	}
	if (curSum < 0) {
		// 1. 总油量 小于 总消耗量
		return -1;
	}
	if (min >= 0) {
		// 2. 说明油箱里油没断过
		return 0;
	}
	// 3. 从后向前，能将这个负数填平的节点就是出发节点
	for (let i = n - 1; i >= 0; i++) {
		let rest = gas[i] - cost[i];
		min += rest;
		if (min >= 0) {
			return i;
		}
	}
}

function canCompleteCircuit(gas, cost) {
	const n = gas.length;
	let start = 0;
	let curSum = 0;
	let totalSum = 0;

	for (let i = 0; i < n; i++) {
		curSum += gas[i] - cost[i];
		totalSum += gas[i] - cost[i];
		if (curSum < 0) {
			// 油量为负 更新出发点
			curSum = 0;
			start = i + 1;
		}
	}
	// 总油量 小于 总消耗量
	if (totalSum < 0) {
		return -1;
	}
	return start;
}

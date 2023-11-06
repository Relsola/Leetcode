/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
	const n = intervals.length;
	if (n < 2) {
		return intervals;
	}
	intervals.sort((a, b) => a[0] - b[0]);
	const result = [];
	let prev = intervals[0];
	for (let i = 1; i < n; i++) {
		let cur = intervals[i];
		if (cur[0] > prev[1]) {
			result.push(prev);
			prev = cur;
		} else {
			prev[1] = Math.max(cur[1], prev[1]);
		}
	}
	result.push(prev);
	return result;
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
	const n = intervals.length;
	if (n <= 1) {
		return 0;
	}
	intervals.sort((a, b) => a[1] - b[1]);
	let count = 1;
	let end = intervals[0][1];
	for (let i = 1; i < n; i++) {
		if (intervals[i][0] >= end) {
			end = intervals[i][1];
			count++;
		}
	}
	return n - count;
}

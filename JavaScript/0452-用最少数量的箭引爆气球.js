/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
	points.sort((a, b) => a[0] - b[0]);
	let result = 1;
	const n = points.length;
	for (let i = 1; i < n; i++) {
		if (points[i][0] > points[i - 1][i]) {
			result++;
		} else {
			points[i][1] = Math.min(points[i - 1][1], points[i][1]);
		}
	}
	return result;
}

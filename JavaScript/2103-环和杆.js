/**
 * @param {string} rings
 * @return {number}
 */
function countPoints(rings) {
	const n = rings.length;
	if (n < 6) {
		return 0;
	}
	const color = {
		R: 1,
		G: 2,
		B: 4
	};
	const hash = new Array(10).fill(0);
	for (let i = 0; i < n; i += 2) {
		hash[rings[i + 1]] |= color[rings[i]];
	}
	return hash.filter(item => item == 7).length;
}

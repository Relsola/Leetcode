/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
	const queue = [];
	people.sort((a, b) => {
		if (b[0] !== a[0]) {
			return b[0] - a[0];
		} else {
			return a[1] - b[1];
		}
	});
	for (let i = 0, n = people.length; i < n; i++) {
		queue.splice(people[i][1], 0, people[i]);
	}
	return queue;
}

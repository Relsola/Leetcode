/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {
	const n = ratings.length;
	const candies = new Array(n).fill(1);
	// 保证右边高分孩子一定比左边低分孩子发更多的糖果
	for (let i = 1; i < n; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}
	// 保证左边高分孩子一定比右边低分孩子发更多的糖果
	for (let i = n - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			candies[i] = Math.max(candies[i], candies[i + 1] + 1);
		}
	}
	return candies.reduce((a, b) => a + b);
}

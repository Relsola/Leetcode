/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
	// 计算n的二进制中1的数量
	const bitCount = n => {
		let count = 0;
		while (n) {
			// 清除最低位的1
			n &= n - 1;
			count++;
		}
		return count;
	};
	// 如果有差，则按bits数排，如果无差，则按原值排
	return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
}

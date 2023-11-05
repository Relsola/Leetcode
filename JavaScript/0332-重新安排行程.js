/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
	const result = ["JFK"],
		length = tickets.length;
	// 按字典顺序排序
	tickets.sort((a, b) => (a[1] < b[1] ? -1 : 1));
	const ticketMap = {};
	// 记录映射关系
	for (const [from, to] of tickets) {
		if (ticketMap[from] === void 0) {
			// 这里选择Map数据结构的原因是Map实例会维护键值对的插入顺序
			ticketMap[from] = new Map();
		}
		ticketMap[from].set(to, (ticketMap[from].get(to) || 0) + 1);
	}
	function backTracking() {
		// 遇到的机场个数，如果达到了航班数量+1，就找到了一个行程
		if (result.length === length + 1) {
			return true;
		}
		const route = result.at(-1);
		const targetMap = ticketMap[route];
		if (targetMap !== void 0) {
			for (const [to, count] of targetMap.entries()) {
				if (count > 0) {
					result.push(to);
					targetMap.set(to, count - 1);
					if (backTracking() === true) {
						return true;
					}
					targetMap.set(to, count);
					result.pop();
				}
			}
		}
		return false;
	}
	backTracking();
	return result;
}
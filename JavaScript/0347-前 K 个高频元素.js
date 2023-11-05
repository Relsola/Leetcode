/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
	const countMap = new Map();
	for (const num of nums) {
		countMap.set(num, (countMap.get(num) ?? 0) + 1);
	}
	// 不构建最小堆 直接对整个数组进行排序，取前k个元素
	return [...countMap.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map(i => i[0]);
}

// 设计最小堆 ------------------------------------------------
class Heap {
	constructor(compareFn) {
		this.compareFn = compareFn;
		this.queue = [];
	}

	// 添加
	push(item) {
		// 推入元素
		this.queue.push(item);

		// 上浮
		let index = this.size() - 1; // 记录推入元素下标
		let parent = ((index - 1) / 2) | 0; // 记录父节点下标

		while (parent >= 0 && this.compare(parent, index) > 0) {
			[this.queue[index], this.queue[parent]] = [
				this.queue[parent],
				this.queue[index]
			];
			// 更新下标
			index = parent;
			parent = ((index - 1) / 2) | 0;
		}
	}

	// 获取堆顶元素并移除
	pop() {
		// 堆顶元素
		const out = this.queue[0];
		// 移除堆顶元素 填入最后一个元素
		this.queue[0] = this.queue.pop();
		// 下沉
		let index = 0; // 记录下沉元素下标
		let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
		let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

		while (
			searchChild !== undefined &&
			this.compare(index, searchChild) > 0
		) {
			[this.queue[index], this.queue[searchChild]] = [
				this.queue[searchChild],
				this.queue[index]
			];
			// 更新下标
			index = searchChild;
			left = 2 * index + 1;
			searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
		}
		return out;
	}

	size() {
		return this.queue.length;
	}

	// 使用传入的 compareFn 比较两个位置的元素
	compare(index1, index2) {
		// 处理下标越界问题
		if (this.queue[index1] === undefined) return 1;
		if (this.queue[index2] === undefined) return -1;

		return this.compareFn(this.queue[index1], this.queue[index2]);
	}
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
	const countMap = new Map();
	for (const num of nums) {
		countMap.set(num, (countMap.get(num) ?? 0) + 1);
	}
	// 构建最小堆
	const heap = new Heap((a, b) => a[1] - b[1]);

	for (const entry of countMap.entries()) {
		heap.push(entry);
		if (heap.size() > k) {
			heap.pop();
		}
	}
	// return heap.queue.map(e => e[0]);

	const result = [];
	for (let i = heap.size() - 1; i >= 0; i--) {
		result[i] = heap.pop()[0];
	}
	return result;
}

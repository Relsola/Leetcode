/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
	class MonoQueue {
		queue;
		constructor() {
			this.queue = [];
		}

		// 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空
		enqueue(value) {
			let back = this.queue.at(-1);
			while (back !== undefined && back < value) {
				this.queue.pop();
				back = this.queue.at(-1);
			}
			this.queue.push(value);
		}

		// 出队：只有当队头元素等于value，才出队
		dequeue(value) {
			const front = this.front();
			if (front === value) {
				this.queue.shift();
			}
		}

		front() {
			return this.queue[0];
		}
	}

	const helperQueue = new MonoQueue(),
		result = [],
		n = nums.length;
	let i = 0,
		j = 0;

	while (j < k) {
		helperQueue.enqueue(nums[j++]);
	}
	result.push(helperQueue.front());
	while (j < n) {
		helperQueue.enqueue(nums[j]);
		helperQueue.dequeue(nums[i]);
		result.push(helperQueue.front());
		i++, j++;
	}

	return result;
}

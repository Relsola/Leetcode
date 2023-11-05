// 仅使用两个栈实现先入先出队列。
// 队列应当支持一般队列支持的所有操作（push、pop、peek、empty）

// 使用两个数组的栈方法（push, pop） 实现队列
function MyQueue() {
	this.stackIn = [];
	this.stackOut = [];
}

/**
 * @description Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stackIn.push(x);
};

/**
 * @description Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	const size = this.stackOut.length;
	if (size > 0) {
		return this.stackOut.pop();
	}
	while (this.stackIn.length > 0) {
		this.stackOut.push(this.stackIn.pop());
	}
	return this.stackOut.pop();
};

/**
 * @description Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	const x = this.pop();
	if (x) {
		this.stackOut.push(x);
	}
	return x;
};

/**
 * @description Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stackIn.length === 0 && this.stackOut.length === 0;
};

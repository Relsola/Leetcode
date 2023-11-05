// 使用数组（push, shift）模拟队列
function MyStack() {
	this.queue1 = [];
	this.queue2 = [];
}

/**
 * @description Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.queue1.push(x);
};

/**
 * @description Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
	if (this.queue1.length === 0) {
		[this.queue1, this.queue2] = [this.queue2, this.queue1];
	}
	while (this.queue1.length > 1) {
		this.queue2.push(this.queue1.shift());
	}
	return this.queue1.shift();
};

/**
 * @description Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
	const x = this.pop();
	if (x) {
		this.queue1.push(x);
	}
	return x;
};

/**
 * @description Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.queue1.length === 0 && this.queue2.length === 0;
};

// 使用一个队列实现 -----------------------------------------------------

function MyStack() {
	this.queue = [];
}

/**
 * @description Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.queue.push(x);
};

/**
 * @description Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
	let size = this.queue.length;
	while (size-- > 1) {
		this.queue.push(this.queue.shift());
	}
	return this.queue.shift();
};

/**
 * @description Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
	const x = this.pop();
	if (x) {
		this.queue.push(x);
	}
	return x;
};

/**
 * @description Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.queue.length === 0;
};

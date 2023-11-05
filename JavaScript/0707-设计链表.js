class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

// 单链表---------------------------------------------------
function MyLinkedList() {
	this.size = 0;
	this.tail = null;
	this.head = null;
}

// 获取链表中下标为 index 的节点
MyLinkedList.prototype.getNode = function (index) {
	if (index < 0 || index >= this.size) return null;
	// 创建虚拟头节点
	let result = new ListNode(null, this.head);
	while (index-- >= 0) result = result.next;
	return result;
};

// 获取链表中下标为 index 的节点的值
MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index >= this.size) return -1;
	return this.getNode(index).val;
};

// 将一个值为 val 的节点插入到链表中作为链表的第一个元素之前
MyLinkedList.prototype.addAtHead = function (val) {
	const node = new ListNode(val, this.head);
	this.head = node;
	this.size++;
	if (this.tail === null) this.tail = node;
};

// 将一个值为 val 的节点追加到链表中作为链表的最后一个元素
MyLinkedList.prototype.addAtTail = function (val) {
	const node = new ListNode(val, null);
	this.size++;
	if (this.tail !== null) {
		this.tail.next = node;
		this.tail = node;
		return;
	}
	this.tail = this.head = node;
};

// 将一个值为 val 的节点插入到链表中下标为 index 的节点之前
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index > this.size) return;
	if (index <= 0) {
		this.addAtHead(val);
		return;
	}
	if (index === this.size) {
		this.addAtTail(val);
		return;
	}
	// 获取目标节点的上一个的节点
	const node = this.getNode(index - 1);
	node.next = new ListNode(val, node.next);
	this.size++;
};

// 删除链表中下标为 index 的节点
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index >= this.size) return;
	if (index === 0) {
		this.head = this.head.next;
		// 如果删除的这个节点同时是尾节点，要处理尾节点
		if (this.size === 1) this.tail = null;
		this.size--;
		return;
	}
	// 获取目标节点的上一个的节点
	const node = this.getNode(index - 1);
	node.next = node.next.next;
	// 处理尾节点
	if (index === this.size - 1) this.tail = node;
	this.size--;
};

class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

function swapPairs(head) {
	// 虚拟表头
	const data = new ListNode(null, head);
	let temp = data,
		cur = null,
		pre = null;

	while (temp.next !== null && temp.next.next !== null) {
		cur = temp.next.next;
		pre = temp.next;

		// 两两交换
		pre.next = cur.next;
		cur.next = pre;
		temp.next = cur;
		temp = pre;
	}

	return data.next;
}

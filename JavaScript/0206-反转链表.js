class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

// 双指针
function reverseList(head) {
	if (head === null || head.next === null) return head;
	let temp = null,
		pre = null,
		cur = head;

	while (cur !== null) {
		temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
}

// 递归（从前往后翻转）
function reverseList(head) {
	const reverse = (pre, head) => {
		if (head === null) return pre;
		const temp = head.next;
		head.next = pre;
		pre = head;
		return reverse(pre, temp);
	};

	return reverse(null, head);
}

// 递归（从后往前翻转）
function reverseList(head) {
	const reverse = head => {
		if (head === null || head.next === null) return head;
		const pre = reverse(head.next);
		head.next = pre.next;
		pre.next = head;
		return head;
	};

	let cur = head;
	while (cur !== null && cur.next != null) cur = cur.next;
	reverse(head);
	return cur;
}

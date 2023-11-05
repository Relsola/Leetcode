class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

// 在原链表上直接删除
function removeElements(head, val) {
	// 删除头部节点
	while (head !== null && head.val === val) head = head.next;
	if (head === null || head.next === null) return head;
	let pre = head,
		cur = head.next;
	// 删除非头部节点
	while (cur !== null) {
		if (cur.val === val) pre.next = cur.next;
		else pre = cur;
		cur = cur.next;
    }
    return head
}

// 虚拟头节点
function removeElements(head, val) {
	const data = new ListNode(null, head);
	let pre = data,
		cur = data.next;

	while (cur !== null) {
		if (cur.val === val) pre.next = cur.next;
		else pre = cur;
		cur = cur.next;
	}

	return data.next;
}

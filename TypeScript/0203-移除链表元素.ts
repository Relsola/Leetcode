// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// 虚拟头节点
function removeElements(head: ListNode | null, val: number): ListNode | null {
	const dummyHead: ListNode = new ListNode(0, head);
	let pre: ListNode | null = dummyHead,
		cur: ListNode | null = dummyHead.next;
	while (cur !== null) {
		cur = cur.val === val ? (pre.next = cur.next) : (pre = cur).next;
	}
	return dummyHead.next;
}

// 在原链表上直接删除
function removeElements2(head: ListNode | null, val: number): ListNode | null {
	// 删除头部节点
	while (head !== null && head.val === val) {
		head = head.next;
	}
	if (head === null) {
		return head;
	}
	let pre: ListNode | null = head,
		cur: ListNode | null = head.next;
	while (cur !== null) {
		cur = cur.val === val ? (pre.next = cur.next) : (pre = cur).next;
	}
	return head;
}

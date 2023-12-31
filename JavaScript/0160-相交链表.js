class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

function getIntersectionNode(headA, headB) {
	let curA = headA,
		curB = headB,
		lenA = getListLen(headA),
		lenB = getListLen(headB);

	// 获取链表长度
	function getListLen(head) {
		let len = 0,
			cur = head;
		while (cur !== null) {
			cur = cur.next;
			len++;
		}
		return len;
	}

	// 让curA为最长链表的头，lenA为其长度
	if (lenA < lenB) {
		[curA, curB] = [curB, curA];
		[lenA, lenB] = [lenB, lenA];
	}

	// 求长度差
	let n = lenA - lenB;
	while (n-- > 0) curA = curA.next;
	while (curA !== null && curA !== curB) {
		curA = curA.next;
		curB = curB.next;
	}
	return curA;
}

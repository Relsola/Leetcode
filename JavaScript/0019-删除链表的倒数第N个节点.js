class ListNode {
	val;
	next = null;
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

// 快慢双指针
// 如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。删掉slow所指向的节点就可以了
function removeNthFromEnd(head, n) {
	const data = new ListNode(null, head);
	let fast = data,
		slow = data;
	while (n-- > 0) fast = fast.next;

	while (fast.next !== null) {
		fast = fast.next;
		slow = slow.next;
	}

	slow.next = slow.next.next;
	return data.next;
}

// 计算节点总数
function removeNthFromEnd(head, n) {
	let curNode = head,
		listSize = 0;

	while (curNode !== null) {
		curNode = curNode.next;
		listSize++;
	}

	if (listSize === n) head = head.next;
	else {
		curNode = head;
		for (let i = 0; i < listSize - n - 1; i++) curNode = curNode.next;
		curNode.next = curNode.next.next;
	}

	return head;
}

// 递归倒退n
function removeNthFromEnd(head, n) {
	const data = new ListNode(null, head);
	let count = 0;

	const recur = node => {
		if (node === null) return;
		recur(node.next);
		count++;
		if (count === n + 1) node.next = node.next.next;
	};

	recur(data);
	return data.next;
}

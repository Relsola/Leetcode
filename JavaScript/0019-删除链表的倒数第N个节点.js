class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @description 快慢双指针，先让fast移动n步，然后让fast和slow同时移动，fast指向链表末尾时删掉slow所指向的节点就可以了
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const data = new ListNode(0, head);
  let fast = data,
    slow = data;
  while (n-- > 0) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return data.next;
}

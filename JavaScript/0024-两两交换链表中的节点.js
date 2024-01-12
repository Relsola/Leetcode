class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head) {
  // 虚拟表头
  const data = new ListNode(0, head);
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

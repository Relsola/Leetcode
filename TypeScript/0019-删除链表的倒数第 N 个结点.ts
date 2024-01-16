class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const data = new ListNode(0, head);
  let slow: ListNode = data,
    fast: ListNode | null = head;
  while (n-- > 0) {
    fast = fast!.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next!;
  }
  slow.next = slow.next!.next;
  return data.next;
}

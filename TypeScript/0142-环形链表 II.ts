class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }
  let slow: ListNode = head.next,
    fast: ListNode | null = head.next.next;
  while (fast !== null && fast.next !== null && fast !== slow) {
    fast = fast.next.next;
    slow = slow.next!;
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next!;
    fast = fast!.next;
  }
  return slow;
}

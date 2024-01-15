/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (head === null || head.next === null) {
    return null;
  }
  // 定义快慢指针 一倍速和二倍速
  let slow = head.next,
    fast = head.next.next;
  // 如果存在环形链表一定会相交
  while (fast !== null && fast.next !== null && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  // 相交之后 数学推理判断
  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

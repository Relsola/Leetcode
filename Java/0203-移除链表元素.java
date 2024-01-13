class Solution {
  public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
      return head;
    }
    ListNode dummy = new ListNode(-1, head);
    ListNode pre = dummy;
    ListNode cur = head;

    while (cur != null) {
      if (cur.val == val) {
        pre.next = cur.next;
      } else {
        pre = cur;
      }
      cur = cur.next;
    }
    return dummy.next;
  }
}

class Solution {
  public ListNode removeElements(ListNode head, int val) {
    while (head != null && head.val == val) head = head.next;
    ListNode cur = head;
    while (cur != null) {
      while (cur.next != null && cur.next.val == val) {
        cur.next = cur.next.next;
      }
      cur = cur.next;
    }
    return head;
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) {
      return null;
    }
    ListNode slow = head.next, fast = head.next.next;
    while (fast != null && fast.next != null && fast != slow) {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (fast == null || fast.next == null) {
      return null;
    }
    slow = head;
    while (fast != slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
}

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
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode data = new ListNode(0, head);
    ListNode slow = data, fast = data;
    while (n-- > 0) {
      fast = fast.next;
    }
    while (fast.next != null) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return data.next;
  }
}

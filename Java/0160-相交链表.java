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
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) {
      return null;
    }
    ListNode p1 = headA, p2 = headB;
    while (p1 != p2) {
      p1 = p1 != null ? p1.next : headB;
      p2 = p2 != null ? p2.next : headA;
    }
    return p1;
  }
}

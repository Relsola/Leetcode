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
  public ListNode swapPairs(ListNode head) {
    ListNode data = new ListNode(0, head);
    ListNode temp = data, cur, pre;
    while (temp.next != null && temp.next.next != null) {
      pre = temp.next;
      cur = temp.next.next;
      pre.next = cur.next;
      cur.next = pre;
      temp.next = cur;
      temp = pre;
    }
    return data.next;
  }
}

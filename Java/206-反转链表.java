class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  },

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

// 双指针法
class Solution {
  public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }
    ListNode temp, pre = null, cur = head;
    while (cur != null) {
      temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }
}

// 从前往后递归
class Solution {
  ListNode reverse(ListNode pre, ListNode cur) {
    if (cur == null) {
      return pre;
    }
    final ListNode temp = cur.next;
    cur.next = pre;
    return reverse(cur, temp);
  }

  public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }
    return reverse(null, head);
  }
}

// 从后向前递归
class Solution {
  ListNode reverse(ListNode head) {
    if (head.next == null) {
      return head;
    }
    final ListNode cur = reverse(head.next);
    head.next = null;
    cur.next = head;
    return head;
  }

  public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }
    ListNode tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    reverse(head);
    return tail;
  }
}

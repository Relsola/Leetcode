public class ListNode
{
  public int val;
  public ListNode next;
  public ListNode(int val = 0, ListNode next = null)
  {
    this.val = val;
    this.next = next;
  }
}


public class Solution
{
  public ListNode DetectCycle(ListNode head)
  {
    if (head == null || head.next == null)
    {
      return null;
    }
    ListNode fast = head.next.next, slow = head.next;
    while (fast != null && fast.next != null && fast != slow)
    {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (fast == null || fast.next == null)
    {
      return null;
    }
    slow = head;
    while (slow != fast)
    {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

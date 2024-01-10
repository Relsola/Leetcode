// 单链表
class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }
}

class MyLinkedList {
  public int size;
  public ListNode head;

  public MyLinkedList() {
    size = 0;
    head = new ListNode(0);
  }

  private ListNode getNode(int index) {
    if (index < 0 || index >= size) return null;
    ListNode cur = head;
    while (index-- >= 0) cur = cur.next;
    return cur;
  }

  public int get(int index) {
    return index < 0 || index >= size ? -1 : getNode(index).val;
  }

  public void addAtHead(int val) {
    addAtIndex(0, val);
  }

  public void addAtTail(int val) {
    addAtIndex(size, val);
  }

  public void addAtIndex(int index, int val) {
    if (index > size) return;
    ListNode pre = index <= 0 ? head : getNode(index - 1);
    size++;
    ListNode node = new ListNode(val);
    node.next = pre.next;
    pre.next = node;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= size) return;
    ListNode pre = index == 0 ? head : getNode(index - 1);
    size--;
    pre.next = pre.next.next;
  }
}

// 双链表
class ListNode {
  int val;
  ListNode next, prev;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }
}


class MyLinkedList {
  public int size;
  public ListNode head, tail;

  public MyLinkedList() {
    size = 0;
    head = new ListNode(0);
    tail = new ListNode(0);
    head.next = tail;
    tail.prev = head;
  }

  private ListNode getNode(int index) {
    if (index < 0 || index >= size) return null;
    ListNode cur = head;
    if (index >= size / 2) {
      cur = tail;
      while (size - index++ > 0) cur = cur.prev;
    } else {
      while (index-- >= 0) cur = cur.next;
    }
    return cur;
  }

  public int get(int index) {
    return index < 0 || index >= size ? -1 : getNode(index).val;
  }

  public void addAtHead(int val) {
    addAtIndex(0, val);
  }

  public void addAtTail(int val) {
    addAtIndex(size, val);
  }

  public void addAtIndex(int index, int val) {
    if (index > size) return;
    ListNode pre = index <= 0 ? head : getNode(index - 1);
    size++;
    ListNode node = new ListNode(val);
    node.next = pre.next;
    node.prev = pre;
    node.next.prev = node;
    pre.next = node;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= size) return;
    ListNode pre = index == 0 ? head : getNode(index - 1);
    size--;
    pre.next = pre.next.next;
    pre.next.prev = pre;
  }
}

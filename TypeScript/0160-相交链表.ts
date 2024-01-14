class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const set = new Set<ListNode | null>();
  let temp: ListNode | null = headA;
  while (temp !== null) {
    set.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (set.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

/** 双指针 */
function reverseList(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let temp = null,
    pre = null,
    cur = head;

  while (cur !== null) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

/** 递归（从前往后翻转） */
function reverseList(head) {
  function reverse(pre, cur) {
    if (cur === null) {
      return pre;
    }
    const temp = cur.next;
    cur.next = pre;
    return reverse(cur, temp);
  }
  return reverse(null, head);
}

/** 递归（从后往前翻转） */
function reverseList(head) {
  if (head === null || head.next === null) {
    return null;
  }
  function reverse(head) {
    if (head.next === null) {
      return head;
    }
    const pre = reverse(head.next);
    head.next = null;
    pre.next = head;
    return head;
  }
  let cur = head;
  while (cur !== null && cur.next !== null) {
    cur = cur.next;
  }
  reverse(head);
  return cur;
}

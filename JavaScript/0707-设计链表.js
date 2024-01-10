class ListNode {
  /**
   * @param {number} value
   * @param {ListNode|null} next
   */
  constructor(value, next) {
    this.val = value;
    this.next = next;
  }
}

function MyLinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
}

/**
 * @param {number} index
 * @returns {ListNode|null}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) {
    return null;
  }
  let cur = new ListNode(0, this.head);
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  return index < 0 || index >= this.size ? -1 : this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val, this.head);
  this.head = node;
  this.size++;
  !this.tail && (this.tail = node);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val, null);
  this.size++;
  this.tail ? (this.tail.next = node) : (this.head = node);
  this.tail = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  const node = this.getNode(index - 1);
  node.next = new ListNode(val, node.next);
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    --this.size === 0 && (this.tail = null);
    return;
  }
  const node = this.getNode(index - 1);
  node.next = node.next.next;
  index === --this.size && (this.tail = node);
};

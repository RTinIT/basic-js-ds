const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new ListNode(value);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  remove(value) {
    if (!this.head) return null;

    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;

      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode.value;
  }
}

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  getUnderlyingList() {
    return this.list.head;
  }

  enqueue(value) {
    if (!value) return;
    this.list.add(value);
  }

  dequeue() {
    if (!this.list.head) return;
    const removed = this.list.remove(this.list.head.value);
    return removed;
  }
}

module.exports = {
  Queue,
};

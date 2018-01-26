'use strict';

const Node = require('./node.js');

class Queue {
  constructor(maxSize=1048) {
    this.front = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(value) {
    if(this.size === this.maxsize) throw new Error('Stack Overflow');

    let node = new Node(value);

    if(!this.front) {
      this.front = node;
      return this;
    }

    for(var itr = this.front; itr.next; itr = itr.next);
    itr.next = node;
    return this;
  }

  dequeue() {
    if(!this.front) throw Error('This queue is empty');

    this.front = this.front.next;
  }
}

module.exports = Queue;
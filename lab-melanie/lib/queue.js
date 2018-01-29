'use strict';

const Node = require('./node.js');

class Queue {
  constructor(maxSize=1048) {
    this.front = null;
    this.back = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(value) {
    if(this.size === this.maxsize) throw new Error('Stack Overflow');

    let node = new Node(value);
    // class demo
    if(!this.back) {
      this.front = this.back = node;
      this.size ++;
      return this;
    }

    // class demo
    //   node.next = this.back;
    //   this.back = node;
    //   this.size ++;
    //   return this;
    // }

    // original code
    // if(!this.front) {
    //   this.front = node;
    //   this.size ++;
    //   return this;
    // }

    // modified original
    // this.back.next = node;
    // this.back = node;
    // this.size ++;
    // return this;

    //ternary demo
    this.back ? this.back.next = node : this.front = node;
    this.back = node;
    this.size ++;
    return this;
  }

  dequeue() {
    if(!this.front && !this.back) throw Error('This queue is empty');
    if(this.front === this.back) {
      let temp = this.front;
      this.front = this.back = null;
      this.size --;
      return temp;
    }


    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.size --;
    return temp;
  }
}

module.exports = Queue;
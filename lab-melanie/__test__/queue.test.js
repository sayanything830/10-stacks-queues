'use strict'; 

const Queue = require('../lib/queue.js');

describe('Queue Module', function() {
  beforeEach(() => this.queue = new Queue());
  
  describe('#Queue constructor', () => {
    it('should create an object', () => {
      expect(this.queue).toBeInstanceOf(Object);
    });
    it('should have a null value', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have a size of 0', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have a maximum size property equal to 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });
  describe('#Enqueue', () => {
    it('should have a size of 8', () => {
      [...Array(8)].map((a, b) => this.queue.enqueue(~~(Math.random() * b)));
      expect(this.queue.size).toEqual(8);
    });
    it('should add a new node to front of queue', () => {
      this.queue.enqueue(10);
      expect(this.queue.front.value).toEqual(10);
    });
    it('should throw an error when max size is met', () => {
      expect(() => {
        [...Array(1050)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#Dequeue', () => {
    it('should remove the last node from queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      expect(this.queue.front.next).toBeNull();
    });
    it('should throw an error if there is nothing to remove', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
    it('should decrease the size of queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(1);
    });
  });
});
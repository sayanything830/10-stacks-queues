'use strict';

const Stack = require('../lib/stack');


describe('Stack Module', function () {
  beforeEach(() => this.stack = new Stack());

  describe('#Stack Constructor', () => {
    it('should create a new instance of a stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('should have a default value of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
    it('should have a default value of 0 assigned to the size property', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });
  describe('#Push', () => {
    it('should have a size of 20', () => {
      [...Array(100)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      expect(this.stack.size).toEqual(100);
    });
    it('should add a new node with the value of 5 to the top of the stack', () => {
      this.stack.push(5);
      expect(this.stack.top.value).toEqual(5);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(2000)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#Pop', () => {
    it('should remove the top most node from the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.value).toEqual(1);
      expect(this.stack.pop().value).toEqual(1);
    });
    it('should throw an error if stack is empty', () => {
      expect(() => {
        this.stack.pop();
      }).toThrow();
    });
  });
  describe('#peek', () => {
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().value).toEqual(1);
    });
    it('should throw an error is stack is empty', () => {
      expect(() => {
        this.stack.peek();
      }).toThrow();
    });
  });
});
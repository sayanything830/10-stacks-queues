'use strict';

const Nd = require('../lib/node.js');


describe('Node Module', function() {
  describe('# Node', () => {
    it('creates a new node', () => {
      expect(new Nd(1)).toBeInstanceOf(Object);
    });
    it('should contain a value that is passed in', () => {
      expect(new Nd(5)).toEqual({value: 5, next: null});
    });
  });
});
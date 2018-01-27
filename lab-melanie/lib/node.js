'use strict';

module.exports = class {
  constructor(value) {
    if(!value) return new Error('Need a value');
    this.value = value;
    this.next = null;
  }
};
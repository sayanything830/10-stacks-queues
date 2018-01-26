'use strict';

module.exports = class {
  contructor(value) {
    if(!value) return new Error('Need a value');
    this.value = value;
    this.next = null;
  }
};
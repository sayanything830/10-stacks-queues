const Queue = require('./lib/queue.js');
const Stack = require('./lib/stack.js');

this.stack = new Stack();
this.queue = new Queue();

console.log('This is the stack module example:');
console.log('adding first node: ', this.stack.push(parseInt(process.argv[2])));
console.log('adding second node: ', this.stack.push(parseInt(process.argv[3])));
console.log('adding third node: ', this.stack.push(parseInt(process.argv[4])));
console.log('current stack size: ', this.stack.size);
console.log('top node value: ', this.stack.top.value);
console.log('removing top node: ', this.stack.pop());
console.log('peek at new top node: ', this.stack.peek());
console.log('new stack size: ', this.stack.size);
console.log('top node value: ', this.stack.top.value);

console.log('*************');

console.log('This is the queue example:');
console.log('adding first node:', this.queue.enqueue(parseInt(process.argv[5])));
console.log('adding second node: ', this.queue.enqueue(parseInt(process.argv[6])));
console.log('removing first node: ', this.queue.dequeue());
console.log('size of queue: ', this.queue.size);

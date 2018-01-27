# Stacks and Queues

## Installing and Getting Started
To install these data structures, fork and git clone this repository in your terminal to your local computer. Navigate to the `lab-melanie` directory and enter `npm install`, this will install all necessary dependencies.

To use data structures, in your terminal enter `node index.js <number> <number> <number> <number> <number>`, each `<number>` represents an integer to use as a value (**hint:** be sure to put spaces between each number you would like to enter, but the numbers may be of any length).

Example:

```
node index.js 1 30 4 75 100
```
Returns in console:

```
This is the stack module example:
adding first node  { value: 1, next: null }
adding second node  { value: 30, next: { value: 1, next: null } }
adding thrid node  { value: 4,
  next: { value: 30, next: { value: 1, next: null } } }
current stack size  3
top node value:  4
removing top node  { value: 4, next: null }
peek at new top node  { value: 30, next: { value: 1, next: null } }
new stack size:  2
top node value:  30
*************
This is the queue example:
adding first node: Queue { front: { value: 75, next: null }, maxSize: 1048, size: 1 }
adding second node:  Queue {
  front: { value: 75, next: { value: 100, next: null } },
  maxSize: 1048,
  size: 2 }
removing first node:  Queue { front: { value: 100, next: null }, maxSize: 1048, size: 1 }
size of queue:  1
```

---

## Data Structures

### Stack Module
This module contains a constructor function, a `push`, `pop`, and `peek` method.

`push` - adds a new node to top of the stack, identifies the next node in stack as the one below it, and will throw an error if the maximum stack size is reached

`pop` - removes a node from the top of the stack, reassigns the top node to the one below it, and will throw an error if the stack is empty

`peek` - shows the node that is at the top of the stack and throws an error if the stack is empty

### Queue Module
This module contains a constructor function, an `enqueue` and a `dequeue` method.

`enqueue` - adds a node to the end of the queue, if no other nodes exist, it assigns this node as the front of the queue, throws an error if the maxumim queue length is met

`dequeue` - removes the front node from the queue and throws an error if no node exists in the queue

## Tests

### Stack Tests

* Checks that the constructor properly creates a node
* Checks that `push` puts a new node at the top of a stack
* Checks that `push` throws an error if max size of stack is met
* Checks that `pop` removes the top node from a stack
* Checks that `pop` throws an error if the stack is empty
* Checks that `peek` returns top node in stack
* Checks that `peek` throws an error if stack is empty

### Queue Tests

* Checks that the constructor properly creates a node
* Checks that `enqueue` adds to end of queue
* Checks that `dequeue` removes a node from front of queue
* Checks that errors are thrown:
  * if max size of queue is met
  * if queue is empty
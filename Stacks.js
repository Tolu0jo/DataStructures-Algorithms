// push,pop,peek,length
const stack = function () {
  this.count = 0;
  this.store = {};

  // Adds a value to the end of the stack
  this.push = function (value) {
    this.store[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.store[this.count];
    delete this.store[this.count];
    return result;
  };
  //the number of element in the store
  this.size = function () {
    return this.count;
  };
  //returns the value at the end of the stack
  this.peek = function () {
    return this.store[this.count - 1];
  };
};

let myStack = new stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());

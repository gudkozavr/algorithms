class Stack {
  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.empty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!this.empty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  search(element) {
    const index = this.items.lastIndexOf(element);
    return index === -1 ? -1 : this.items.length - 1 - index;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.search(20));
console.log(stack.pop());
console.log(stack.empty());

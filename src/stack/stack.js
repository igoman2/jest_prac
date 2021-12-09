class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }
  push(val) {
    this.array.push(val);
  }
}
module.exports = Stack;

const Stack = require("../stack");

describe("Stack Test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  describe("Push", () => {
    it("is created with empty", () => {
      expect(stack.size()).toBe(0);
    });
    it("push value", () => {
      stack.push(5);
      expect(stack.size()).toBe(1);
    });
  });
  describe("Pop", () => {
    it("returns the last pushed and removes item", () => {
      stack.push(5);
      stack.push(9);
      expect(stack.pop()).toBe(9);
      expect(stack.size()).toBe(1);
    });
  });
  describe("Peek", () => {
    it("returns the last pushed but not remove item", () => {
      stack.push(5);
      stack.push(9);
      expect(stack.peek()).toBe(9);
      expect(stack.size()).toBe(2);
    });
  });
});

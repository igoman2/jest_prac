const Stack = require("../stack");

describe("Stack Test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created with empty", () => {
    expect(typeof stack.value).toBe(Array);
    expect(stack.size()).toBe(0);
  });
  //   it("push value", () => {
  //     stack.push(5);
  //     expect(stack.length).toBe(1);
  //     expect(stack[0]).toBe(5);
  //   });
  //   it("pop value", () => {
  //     let val = stack.pop();
  //     expect(stack.size()).toBe(0);
  //     expect(val).toBe(5);
  //   });
});

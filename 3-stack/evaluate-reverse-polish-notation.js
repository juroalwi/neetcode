/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.floor(a / b),
  };
  const operandsStack = [];
  let computation = null;

  for (let token of tokens) {
    if (isNaN(Number(token))) {
      const b = operandsStack.pop();
      if (computation === null) {
        const a = operandsStack.pop();
        computation = operations[token](a, b);
      } else computation = operations[token](computation, b);
    } else operandsStack.push(Number(token));
  }

  return computation;
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) =>
      (a < 0 && b < 0) || (a > 0 && b > 0)
        ? Math.floor(a / b)
        : Math.ceil(a / b),
  };
  const operandsStack = [];

  for (let token of tokens) {
    if (isNaN(Number(token))) {
      const b = operandsStack.pop();
      const a = operandsStack.pop();
      const computation = operations[token](a, b);
      operandsStack.push(computation);
    } else operandsStack.push(Number(token));
  }

  return operandsStack.pop();
};

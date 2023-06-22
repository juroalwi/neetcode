/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenthesisTable = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const input = s.split("");
  const leftBracketsStack = [];

  while (input.length > 0) {
    if (input[0] in parenthesisTable) {
      leftBracketsStack.push(input.shift());
    } else if (parenthesisTable[leftBracketsStack.pop()] !== input.shift())
      return false;
  }

  if (leftBracketsStack.length > 0) return false;
  else return true;
};

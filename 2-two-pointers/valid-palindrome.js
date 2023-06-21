/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphRgx = /[a-zA-Z0-9]/;
  let lastLeftmostAlphChar = null;

  while (s.length > 0) {
    if (!lastLeftmostAlphChar) {
      const leftmostChar = s.at(0).toLowerCase();
      const isLeftmostCharAlph = alphRgx.test(leftmostChar);

      if (isLeftmostCharAlph) {
        lastLeftmostAlphChar = leftmostChar;
      }

      s = s.slice(1);
    } else {
      const rightmostChar = s.at(-1).toLowerCase();
      const isRightmostCharAlph = alphRgx.test(rightmostChar);

      if (isRightmostCharAlph) {
        if (lastLeftmostAlphChar !== rightmostChar) return false;
        else lastLeftmostAlphChar = null;
      }

      s = s.slice(0, -1);
    }
  }

  return true;
};

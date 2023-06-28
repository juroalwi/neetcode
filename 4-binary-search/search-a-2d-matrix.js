/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom) {
    let vm = Math.floor((top + bottom) / 2);
    let row = matrix[vm];

    if (row[0] <= target && target <= row.at(-1)) {
      let left = 0;
      let right = row.length - 1;

      while (left <= right) {
        let hm = Math.floor((left + right) / 2);

        if (row[hm] > target) {
          right = hm - 1;
        } else if (row[hm] < target) {
          left = hm + 1;
        }
        console.log(hm);

        if (row[hm] === target) {
          return true;
        }
      }

      return false;
    }

    if (matrix[vm][0] > target) {
      bottom = vm - 1;
    } else if (matrix[vm][0] < target) {
      top = vm + 1;
    }
  }

  return false;
};

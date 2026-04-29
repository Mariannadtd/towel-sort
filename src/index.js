module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix) {
    return result;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      for (let k = 0; k < matrix[i].length; k += 1) {
        result.push(matrix[i][k]);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
};

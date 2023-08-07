
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let multidimensionalArray = [];
    let resultArray = [];
  
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        multidimensionalArray.push(matrix[i]);
      } else {
        multidimensionalArray.push(matrix[i].reverse())
      };
      {
        for (let j = 0; j < multidimensionalArray[i].length; j++) {
          resultArray.push(multidimensionalArray[i][j])
        }
      }
    }
    return resultArray;
}

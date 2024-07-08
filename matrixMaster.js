export function matrixOfMatrices(matrix) {
   if (Array.isArray(matrix)) {
      if (matrix.length === 0) {
         return false;
      } else if (matrix.length === 1 && matrix[0] !== 1) {
         return false;
      }

      for (let i = 0; i < matrix.length; i++) {
         var element = matrix[i];
         console.log(element);
      }

   } else {
      return false;
   }
}

matrixOfMatrices([[1, 2, 3], [3, 2, 1], [2, 1, 3]]);

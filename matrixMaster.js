export function matrixOfMatrices(matrix) {
   if (Array.isArray(matrix)) {
      if (matrix.length === 0) {
         return false;
      }
   } else {
      return false;
   }
}

import { expect } from 'chai';
import { matrixOfMatrix } from '../matrixMaster.js';

describe('matrixOfMatrix function', function() {
    it('should return true from a 3x3 matrix that has all ints from 1 to 3 in each and every matrix', function() {
        const result = matrixOfMatrix([[1, 2, 3], [3, 2, 1], [3, 1, 2]]);
        expect(result).to.equal(true);
    });

    it('should return true from a 1x1 matrix that has 1 as the element', function() {
        const result = matrixOfMatrix([1]);
        expect(result).to.equal(true);
    });

    it('should return true from a small (2x2) matrix that has 1 and 2 in both matrices', function() {
      const result = matrixOfMatrix([[1, 2], [1, 2]]);
      expect(result).to.equal(true);
    });

    it('should return true from a long (10x10) matrix that has all the ints from 1 through 10 in each and every matrix', function() {
        const result = matrixOfMatrix([
  [6, 4, 9, 3, 8, 1, 7, 2, 10, 5],
  [10, 7, 1, 3, 8, 4, 6, 2, 5, 9],
  [9, 3, 2, 7, 4, 5, 1, 10, 8, 6],
  [5, 1, 7, 4, 8, 2, 10, 9, 6, 3],
  [7, 3, 5, 8, 2, 4, 9, 10, 1, 6],
  [9, 6, 7, 5, 4, 3, 1, 2, 10, 8],
  [4, 9, 1, 2, 7, 6, 8, 5, 3, 10],
  [2, 10, 6, 1, 8, 7, 4, 5, 3, 9],
  [8, 3, 6, 4, 1, 5, 2, 10, 9, 7],
  [5, 6, 4, 7, 10, 1, 2, 8, 9, 3]
]);
        expect(result).to.equal(true);
    });

    it('should return false from a 3x3 matrix that does not have all integers from 1 to 3 in each and every matrix', function() {
        const result = matrixOfMatrix([[1, 2, 3], [2, 3, 1], [3, 3, 1]]);
        expect(result).to.equal(false);
    });

    it('should return false from an empty matrix', function() {
        const result = matrixOfMatrix([]);
        expect(result).to.equal(false);
    });

    it('should return false from a matrix that contains a non integer character', function() {
        const result = matrixOfMatrix([[1, 2, 3, '4'], [2, 3, 4, 1], [2, 4, 1, 3], [3, 2, 1, 4]]);
        expect(result).to.equal(false);
    });

    it('should return false from a 1x1 matrix that does not have 1 as the element', function() {
        const result = matrixOfMatrix([23]);
        expect(result).to.equal(false);
    });  
});

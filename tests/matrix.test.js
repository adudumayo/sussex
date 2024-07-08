import { expect } from 'chai';
import { matrixOfMatrix } from '../matrix.js';

describe('matrixOfMatrix function', function() {
    it('should return true from a 3x3 matrix that has {1-3} in each and every matrix', function() {
        const result = matrixOfMatrix([[1, 2, 3], [3, 2, 1], [3, 1, 2]]);
        expect(result).to.equal(true);
    });

    it('should return false from a 3x3 matrix that does not have {1-3} in each and every matrix', function() {
        const result = matrixOfMatrix([[1, 2, 3], [2, 3, 1], [3, 3, 1]]);
        expect(result).to.equal(false);
    });

    it('should return false from an empty matrix', function() {
        const result = matrixOfMatrix([]);
        expect(result).to.equal(false);
    });
});

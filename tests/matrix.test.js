import { expect } from 'chai';
import { matrixOfMatrix } from '../matrix.js';

describe('matrixOfMatrix function', function() {
    it('should take an n x n matrix and return true if all ints from 1 to n (incl) are in each matrice', function() {
        const result = matrixOfMatrix([[1, 2, 3], [3, 2, 1], [3, 1, 2]]);
        expect(result).to.equal(true);
    });
});

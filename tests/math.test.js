import { expect } from 'chai';
import { add } from '../math.js';

describe('Math functions', function() {
    it('should add two numbers correctly', function() {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });
});

import 'mocha';
import { expect } from 'chai';
import { Add } from './main';


describe('String Calcultator', () => {

    it ('Empty string returns 0', () => {
        const result = Add('');
        expect(result).equal(0);
    });

    it ('1 + 2 is equal to 3', () => {
        const result = Add('1,2');
        expect(result).equal(3);
    });

    it ('Should handle any amount of numbers', () => {
        const result = Add('1,2,3,4,5,6,7,8,9');
        expect(result).equal(45);
    });

    it ('Should handle linebreaks', () => {
        const result = Add('1\n2,3');
        expect(result).equal(6);
    });

    it ('Should allow changing delimiters', () => {
        const result = Add('//;\n1;2');
        expect(result).equal(3);
    });
});










// import 'mocha';
// import { expect } from 'chai';
// // import { RomanNumber } from './main';

// describe('Simple', () => {
// it('hello', () => {
//     expect(1).equal('1');
//     });
// });

// describe('Roman Number conversion', () => {
//     it('1 is equal to I', () => {
//         const value = RomanNumber.fromNumber(1);
//         expect(value.roman).equal('I');
//     });
//     it('2 is equal to II', () => {
//         const value = RomanNumber.fromNumber(2);
//         expect(value.roman).equal('II');
//     });
// });
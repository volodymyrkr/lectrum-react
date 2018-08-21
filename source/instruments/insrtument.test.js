import {sum} from './';

describe('instruments:', ()=>{
    test('sum function should add two numbers', ()=>{
        expect(sum(2,3)).toBe(5);
    })
})

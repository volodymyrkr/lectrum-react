import { sum, delay, getUniqueID, getFullApiUrl } from './';

describe('instruments:', ()=>{
    test('sum function should add two numbers', ()=>{
        expect(sum(2,3)).toBe(5);
        expect(sum(3,2)).toBe(5);
    })
    test('sum function should add two numbers', ()=>{
        expect(()=>(sum("sd",3))).toThrow();
        expect(()=>(sum(2,"sd"))).toThrow();
        expect(()=>(sum("sd"))).toThrow();
    })
    test('delay function should  return a resolved argument', async ()=>{
        await expect(delay()).resolves.toBe('success');
        await expect(delay(2000)).resolves.toBe('success');
    })
    test('getUniqueID function should return unique ID', async ()=>{
        expect(getUniqueID(0)).toBe("");
        expect(getUniqueID().length).toBe(15);
        expect(()=>(getUniqueID("s"))).toThrow();
    })
    test('getFullApiUrl function should return real url', async ()=>{
        expect(getFullApiUrl("1","2")).toBe("1/2");
        expect(getFullApiUrl("","")).toBe("/");
        // expect(getFullApiUrl("",null)).toBe("/");
        // expect(getFullApiUrl(null,null)).toBe("/");
        expect(()=>(getFullApiUrl(true, false))).toThrow();
    })
})

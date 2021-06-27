const { validateEntries, validateNumbers, validateEmail } = require('../lib/Validate');


describe('this test validateEntries', () => {
    it('should return this is not a valid input when no string is inputed', () => {
        const employee = '';

        let result = validateEntries(employee);

        expect(result).toBe('this is not a valid input');
    })

    it('should return true if the input is valid', () => {
        const employee = 'test';

        let result = validateEntries(employee);

        expect(result).toEqual(true);
    })
})

describe('this test validateNumbers', () => {
    it('should return this is not a valid input when not a number', () => {
        const employee = 'test value';

        let result = validateNumbers(employee);

        expect(result).toBe('this is not a valid input');
    })

    it('should return true if input typeof is  number', () => {
        const employee = 12;

        let result = validateNumbers(employee);

        expect(result).toEqual(true);

    })
})

describe('this test validateEmail', () => {
    it('should return this is not a valid input', () => {
        const employee = 'ana';

        let result = validateEmail(employee);

        expect(result).toBe('this is not a valid email adress');
    })

    it('should return true if the input is and email', () => {
        const employee = 'aabd@gmail.com';

        let result = validateEmail(employee);

        expect(result).toEqual(true);

    })
})
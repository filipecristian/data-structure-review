const service = require('../src/two-dimensional');

describe('test two-demensional array', () => {
    it('test 1', () => {
        let matrix = [
            ['F','F','F'],
            ['-','F','-'],
            ['-','F','F'],
            ['#','F','-'],
            ['F','F','-'],
            ['-','-','-'],
            ['-','-','#'],
            ['-','-','-'],
        ];

        let expected = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['F', '-', 'F'],
            ['#', 'F', '-'],
            ['-', 'F', 'F'],
            ['-', 'F', '-'],
            ['F', 'F', '#'],
            ['-', 'F', '-'],
        ];

        let result = service.fall(matrix);

        expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
    });
});

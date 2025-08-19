const service = require('../src/circle-sequence');

const provider = () => [
    [
        "caso base",
        [
            [3, 5], [1, 4], [2, 4], [1, 5]
        ],
        [ 3, 5, 1, 4, 2 ]
    ],
];

describe('test circle sequence', () => {
    it.each(provider())('test: %s', (name, matrix, matrixExpected) => {
            expect(JSON.stringify(service.returnSequence(matrix))).toEqual(JSON.stringify(matrixExpected));
     });
});

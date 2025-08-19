const service = require('../src/two-dimensional');

const provider = () => [
    [
        "caso base",
        [
            ['F','F','F'],
            ['-','F','-'],
            ['-','F','F'],
            ['#','F','-'],
            ['F','F','-'],
            ['-','-','-'],
            ['-','-','#'],
            ['-','-','-'],
        ],
        [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['F', 'F', 'F'],
            ['#', 'F', '-'],
            ['-', 'F', 'F'],
            ['-', 'F', '-'],
            ['F', 'F', '#'],
            ['-', '-', '-'],
        ]
    ],
    // Novo caso: Obstáculo na base
    [
        "Obstáculo na base",
        [
            ['F','F','F'],
            ['-','-','-'],
            ['-','-','-'],
            ['#','-','#'],
        ],
        [
            ['-','-','-'],
            ['-','-','-'],
            ['F','F','F'],
            ['#','-','#'],
        ]
    ],
    // Novo caso: Obstáculo no topo
    [
        "Obstáculo no topo",
        [
            ['#','F','-'],
            ['F','F','-'],
            ['-','-','-'],
        ],
        [
            ['#','-','-'],
            ['-','F','-'],
            ['F','F','-'],
        ]
    ],
    // Novo caso: Obstáculo no meio
    [
        "Obstáculo no meio",
        [
            ['F','F','F'],
            ['-','-','-'],
            ['#','-','-'],
            ['-','-','-'],
        ],
        [
            ['-','-','-'],
            ['F','F','F'],
            ['#','-','-'],
            ['-','-','-'],
        ]
    ],
];

describe('test two-demensional array', () => {
    it.each(provider())('test: %s', (name, matrix, matrixExpected) => {
            expect(JSON.stringify(service.fall(matrix))).toEqual(JSON.stringify(matrixExpected));
     });
});

const service = require('../src/animation-songs');


const provider = () => [
  [
    ['notion:180', 'voyage:185', 'sample:180'], // songs
    ['circles:360', 'squares:180', 'lines:37'], // animations
    ['squares:1', 'lines:5', 'squares:1'] // expected
  ]
];

describe('test animations x songs', () => {
    it.each(provider())('%s% s should be %s', (songs, animations, expected) => {
        const result = service.animation(songs, animations);
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
});
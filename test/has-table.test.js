const service = require('../src/hash-table');

const duplicatesProvider = () => [
  // ✅ Sem duplicados
  [[1, 2, 3, 4], false],
  [[10, 20, 30, 40, 50], false],
  [[-1, -2, -3, -4], false],
  [[], false],
  [[0], false],
  [['a', 'b', 'c'], false],
  [[true, false], false],
  [[null, undefined, 0], false],

  // ❌ Com duplicados
  [[1, 2, 3, 2], true],
  [[5, 5, 5, 5], true],
  [[-1, -2, -1], true],
  [['a', 'b', 'a'], true],
  [[null, null], true],
  [[undefined, undefined], true],
  [[true, true], true],
  [[false, false], true],

  // ⚠️ Tipagem mista que causa duplicação
  [['1', 1], false], // JS diferencia string de número
  [[{}, {}], false], // Objetos diferentes por referência
  [[[], []], false], // Arrays diferentes por referência
];

describe('test is duplicated', () => {
    it.each(duplicatesProvider())('%s should be %s', (list, expected) => {
        expect(service.isDuplicate(list)).toBe(expected);
    });
});
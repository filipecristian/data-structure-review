const service = require('../src/palindromo');

const provider = () => [
  ['abba', true],                   // palavra simples
  ['racecar', true],               // palavra comum
  ['A man a plan a canal Panama', true], // com espaços e maiúsculas
  ['12321', true],                 // número como string
  ['madam', true],                 // palavra simples
  ['noon', true],                  // palavra de 4 letras
  ['Was it a car or a cat I saw', true], // frase palíndroma
  ['notapalindrome', false],      // claramente não
  ['hello', false],               // palavra comum
  ['12345', false],               // número não palíndromo
  ['Was it a dog or a cat I saw', false], // quase, mas não
  ['Able was I ere I saw Elba', true],   // clássico
  [' ', true],                    // espaço vazio
  ['a', true],                    // um caractere
  ['aa', true],                   // dois iguais
  ['ab', false],                  // dois diferentes
];

describe('test palindromo', () => {
    it.each(provider())('%s should be %s', (text, expected) => {
        expect(service.isPalindromo(text)).toBe(expected);
    });
});
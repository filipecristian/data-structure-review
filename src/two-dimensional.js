function fall(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let pairs = [];

    let primeiraLinhaDoObstaculo = rows;
    let primeiraLinhaDoObjeto = rows;
    let deslocamento = 0;
    
    for (let col = 0; col < cols; col++) {
        for (let row = rows - 1; row >= 0; row--) {
            if (matrix[row][col] == 'F') {
                if (row < primeiraLinhaDoObjeto) {
                    primeiraLinhaDoObjeto = row + 1;
                }
                pairs.push([row, col]);
            } else if (matrix[row][col] == '#' && row != 0) {
                if (row < primeiraLinhaDoObstaculo) {
                    primeiraLinhaDoObstaculo = row + 1;
                }
            }
        }
    }

    deslocamento = Math.abs(primeiraLinhaDoObstaculo - primeiraLinhaDoObjeto) - 1;
    let linha;
    let coluna;
    for (let i = 0; i < pairs.length; i++) {
        linha = pairs[i][0];
        coluna = pairs[i][1];

        if (linha == rows - 1) continue;

        matrix[linha][coluna] = '-';
        matrix[linha + deslocamento][coluna] = 'F';
    }

    return matrix;
}

module.exports = { fall };
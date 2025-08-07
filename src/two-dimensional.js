function fall(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Para cada coluna
    for (let col = 0; col < cols; col++) {
        let write = rows - 1;
        // Percorre de baixo para cima
        for (let row = rows - 1; row >= 0; row--) {
            if (matrix[row][col] === '#') {
                write = row - 1; // Não pode passar pelo obstáculo
            } else if (matrix[row][col] === 'F') {
                if (write !== row) {
                    matrix[write][col] = 'F';
                    matrix[row][col] = '-';
                }
                write--;
            }
        }
    }

    return matrix;

    /*let sizeX = matrix[0].length - 1;
    let sizeY = matrix.length - 1;
    let output;
    for (let i = sizeX; i > -1; i--) {
        for (let j = sizeY; j > 0; j--) {
            for (let z = j-1; z > 0; z--) {
                if (matrix[j][i] == '-' && matrix[z][i] == 'F') {
                    matrix[j][i] = 'F';
                    matrix[j][i-1] = '-';
                }
            }
        }
        console.log(output);
    }

    return matrix;*/
}

module.exports = { fall };
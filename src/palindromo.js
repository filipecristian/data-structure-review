function isPalindromo(text) {
    let i = 0;
    let controlI = Math.floor(text.length / 2) - 1;

    let j = text.length - 1;
    let controlJ = Math.floor(text.length / 2);

    while (i <= controlI && j >= controlJ) {
        if (text[i] == ' ') {
            i++;
            continue;
        }

        if (text[j] == ' ') {
            j--;
            continue;
        }

        if (text[i].toLowerCase() != text[j].toLowerCase()) return false;

        i++;
        j--;
    }
    
    return true;
}

module.exports = { isPalindromo };
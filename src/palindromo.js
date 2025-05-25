function isPalindromo(text) {
    let i = 0;
    let j = text.length - 1;
    // n atan
    while (i < j) {
        
        if (text[i] == ' ') {
            i++;
            continue;
        }

        if (text[j] == ' ') {
            j++;
            continue;
        }

        if (text[i].toLowerCase() != text[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
}

module.exports = { isPalindromo };
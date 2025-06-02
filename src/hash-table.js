function isDuplicate(list) {
    const map = new Map();
    
    for (const value of list) {
        if (map.get(value) === true) {
            return true;
        }
        map.set(value, true);
    }

    return false;
}

module.exports = { isDuplicate };
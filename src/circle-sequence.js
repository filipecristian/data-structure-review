function returnSequence(pairs) {
    let map = [];
    let value1;
    let value2;
    let first = true;
    

    for (let i = 0; i < pairs.length; i++) {
        if (first) {
            map.push(pairs[i][0]);
            map.push(pairs[i][1]);
            first = false;
            continue;
        }

        value1 = null;
        value2 = null;

        for (let j = 1; j < map.length; j++) {
            if (map[j] == pairs[i][0]) {
                value1 = pairs[i][0];
            }
            if (map[j] == pairs[i][1]) {
                value2 = pairs[i][1];
            }
        }

        if (value1 == null) {
            map.push(pairs[i][0]);
        }

        if (value2 == null) {
            map.push(pairs[i][1]);
        }
    }
    
    return map;
}

module.exports = { returnSequence };
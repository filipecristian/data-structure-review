function animation (songs, animation) {
    let result = [];
    let times = 0;
    let songLength = 0;
    let animationLength = 0;

    for (let i = 0; i < songs.length; i++) {
        for (let j = 0; j < animation.length; j++) {
            songLength = parseInt(songs[i].split(':')[1]);
            animationLength = parseInt(animation[j].split(':')[1]);

            if (songLength % animationLength === 0) {
                times = songLength / animationLength;
                result.push(`${animation[j].split(':')[0]}:${times}`);
                break;
            }
        }
    }

    return result;
}

module.exports = { animation };
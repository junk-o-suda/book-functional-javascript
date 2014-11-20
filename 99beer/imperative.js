#!/usr/bin/env node

var lyrics = [];

for(var bottles = 99; bottles > 0; bottles--) {
    lyrics.push(bottles + ' bottles of beer on the wall');
    lyrics.push(bottles + ' bottles of beer');
    lyrics.push('Take one down, and pass it around');

    if(1 < bottles) {
        lyrics.push((bottles - 1) + ' bottles of beer on the wall.');
    }
    else {
        lyrics.push('No more bottles of beer on the wall!');
    }
}

console.log(lyrics.join('\n'));

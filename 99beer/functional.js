#!/usr/bin/env node

var _ = require('underscore');

function lyric_segment(n) {
    return _.chain([])
        .push(n + ' bottles of beer on the wall')
        .push(n + ' bottles of beer')
        .push('Take one down, and pass it around')
        .tap(function(lyrics) {
            if(1 < n) {
                lyrics.push((n - 1) + ' bottles of beer on the wall.');
            }
            else {
                lyrics.push('No more bottles of beer on the wall!');
            }
        })
        .value();
};

function song(start, end, lyric_generator) {
    return _.reduce(_.range(start, end, -1), function(acc, val) {
        return acc.concat(lyric_generator(val));
    }, []);
};

console.log(song(99, 0, lyric_segment));

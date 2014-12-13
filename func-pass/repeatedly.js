#!/usr/bin/env node

var _ = require('underscore');

function repeatedly(times, func) {
    return _.map(_.range(times), func);
}

console.log(
    repeatedly(3, function() {
        return Math.floor((Math.random() * 10) + 1);
    })
);

console.log(
    repeatedly(6, function() {
        return 'Yo!!';
    })
);

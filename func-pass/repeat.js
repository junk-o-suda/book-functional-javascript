#!/usr/bin/env node

var _ = require('underscore');

function repeat(times, value) {
    return _.map(_.range(times), function() {
        return value;
    });
}

console.log(
    repeat(4, 'Ping')
);

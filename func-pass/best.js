#!/usr/bin/env node

var _ = require('underscore');

function best(fun, coll) {
    return _.reduce(coll, function(x, y) {
        return fun(x, y) ? x : y;
    });
}

console.log(
    best(function(x, y) { return x > y; }, [1 ,2, 3, 4, 5])
);

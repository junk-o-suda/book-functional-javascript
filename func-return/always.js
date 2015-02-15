#!/usr/bin/env node

var _ = require('underscore');

function repeatedly(times, func) {
    return _.map(_.range(times), func);
}

function always(value) {
    return function() {
        return value;
    };
}

// Rule #1
var f = always(function() {}),
    g = always(function() {});

console.log('f is', f);
console.log('f() is', f());
console.log('g is', g);
console.log('g() is', g());
console.log('');

console.log('f === f', f === f);
console.log('f() === f()', f() === f());
console.log('f === g', f === g);
console.log('f() === g()', f() === g());
console.log('');

console.log(
    repeatedly(3, always(Math.floor((Math.random() * 10) + 1)))
);

console.log(
    repeatedly(6, always('Yo!!!'))
);

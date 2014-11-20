#!/usr/bin/env node

'use strict';

var a = {
    name: 'a',
    fn: function() {
        return this;
    }
};

var b_fn = function() {
    return this;
};

var b = {
    nbme: 'b',
    fn: b_fn
};

console.log(a, a.fn(), a.fn().name);
console.log(b, b.fn(), b.fn().nbme);

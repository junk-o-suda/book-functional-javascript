#!/usr/bin/env node

var _ = require('underscore');

function existy(x) {
    return x != null;
}

function fnull(fun /*, defaults */) {
    var defaults = _.rest(arguments);

    return function(/* args */) {
        var args = _.map(arguments, function(e, i) {
            return existy(e)?e:defaults[i];
        });

        return fun.apply(null, args);
    };
}

function defaults(d) {
    return function(o, k) {
        var val = fnull(_.identity, d[k]);

        return o && val(o[k]);
    };
}

function do_something(config) {
    var lookup = defaults({critical: 180});

    return lookup(config, 'critical');
}

var nums = [1, 2, 3, null, 5],
    safeMult = fnull(function(total, n) {
        return total * n;
    }, 1, 1);

console.log(_.reduce(nums, function(total, n) {
    return total * n;
}));

console.log(_.reduce(nums, safeMult));

console.log(do_something({critical: 4}));
console.log(do_something({}));

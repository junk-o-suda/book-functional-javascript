#!/usr/bin/env node

var _ = require('underscore');

function iterate_until(func, check, init) {
    var ret = [],
        result = func(init);

    while(check(result)) {
        ret.push(result);

        result = func(result);
    }

    return ret;
}

console.log(
    iterate_until(
        function(n) { return n + n; },
        function(n) { return 1024 >= n; },
        1
    )
);

console.log(
    iterate_until(
        function(n) { return n + n; },
        function(n) { return 1024 >= n; },
        1
    )
);

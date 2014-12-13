#!/usr/bin/env node

var _ = require('underscore');

function plucker(field) {
    return function(obj) {
        return obj && obj[field];
    };
}

function finder(value_fun, best_fun, coll) {
    return _.reduce(coll, function(best, current) {
        var best_value = value_fun(best),
            current_value = value_fun(current);

            return (best_value === best_fun(best_value, current_value))?best:current;
    });
}

console.log(
    finder(_.identity, Math.max, [1 ,2, 3, 4, 5])
);

var people = [
    {name: 'Person A', age: 12},
    {name: 'Person B', age: 45},
    {name: 'Person C', age: 65},
    {name: 'Person D', age: 23},
    {name: 'Person E', age: 45},
    {name: 'Person F', age: 34}
];

console.log(
    finder(
        function(obj) { return obj.name; },
        function(obj) { return 'Person E'; },
        people
    )
);

console.log(
    finder(
        plucker('age'),
        Math.max,
        people
    )
);

console.log(
    finder(
        plucker('name'),
        function(x, y) {
            return ('B' === x.charAt(x.length - 1))?x:y;
        },
        people
    )
);

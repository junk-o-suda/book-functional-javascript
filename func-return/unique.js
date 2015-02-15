#!/usr/bin/env node

var uniques = [
    {
        title: 'Filed length random',
        args: [10],
        count: 5,
        func: function(len) {
            return Math.random().toString(36).substr(2, len);
        }
    },

    {
        title: 'Prefix + timestamp',
        args: ['XYZ'],
        count: 1,
        func: function(prefix) {
            return [prefix, new Date().getTime()].join('');
        }
    },

    {
        title: 'Prefix + counter',
        args: ['ABC'],
        count: 5,
        func: create_unique_count_function(10000)
    }
];

function create_unique_count_function(start) {
    var COUNTER = start;

    return function(prefix) {
        return [prefix, COUNTER++].join('');
    };
}

uniques.forEach(function(unique) {
    console.log(unique.title);

    for(i = 0; i < unique.count; i++) {
        console.log(
            unique.func.apply(null, unique.args)
        );
    }

    console.log('');
});

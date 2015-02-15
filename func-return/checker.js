#!/usr/bin/env node

var _ = require('underscore');

function always(value) {
    return function() {
        return value;
    };
}

function checker(/* validators */) {
    var validators = _.toArray(arguments);

    return function(obj) {
        return _.reduce(validators, function(errs, check) {
            if(check(obj)) {
                return errs;
            }
            else {
                return _.chain(errs).push(check.message).value();
            }
        }, []);
    };
}

function validator(message, func) {
    var f = function(/* args */) {
        return func.apply(func, arguments);
    };

    f.message = message;

    return f;
}

function a_map(obj) {
    return _.isObject(obj);
}

function has_keys() {
    var KEYS = _.toArray(arguments);
        func = function(obj) {
            return _.every(KEYS, function(k) {
                return _.has(obj, k);
            });
        };

        func.message = _.flatten(['Must have values for keys:', KEYS]).join(' ');

        return func;
}

var always_passes = checker(always(true), always(true)),
    fails = always(false),
    always_fails = checker(fails, always(false), fails),
    gonna_fail = checker(validator('ZOMG!!!', always(false))),
    check_command = checker(validator('must be a map', a_map)),
    check_command_key = checker(
        validator('must be a map', a_map),
        has_keys('msg', 'type')
    );

fails.message = 'check failed';

console.log('Always passes', always_passes({}));
console.log('Always fails', always_fails({}));
console.log('');

console.log('Gonna fail', gonna_fail(100));
console.log('');

console.log('{} is map?', check_command({}));
console.log('65 is map?', check_command(65));
console.log('');

console.log('{} is command?', check_command_key({}));
console.log('{msg: "blah"} is command?', check_command_key({msg: 'blah'}));
console.log('{msg: "blah", type: "display"} is command?', check_command_key({msg: 'blah', type: 'display'}));

"use strict";
function fn(arg) {
    return arg;
}
console.log(fn(1));
console.log(fn("1"));
fn(true);
fn([]);
fn(["1"]);
fn([true]);
function fn1(arg) {
    return arg.length;
}
console.log(fn1('123'));

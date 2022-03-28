"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello, " + this.name);
    }
}
class Student {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello, " + this.name);
    }
}
class Animal {
    constructor(name) {
        this._name = name;
    }
    sayHello() {
        console.log("Hello, " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
const animal = new Animal("Dog");
console.log(animal.name);
animal.name = "Cat";
console.log(animal.name);
class Cat {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
}
const cat = new Cat("小白", 3);
console.log(cat._name, cat._age);

"use strict";
//使用class关键字定义类
class Person {
    //定义类的构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //在属性前使用static关键字，表示这个属性是类的属性，而不是实例属性，可以通过类名来访问
    static sayHi() {
        return 'Hi';
    }
    //定义类的方法
    sayHello() {
        return `Hello,${this.name}`;
    }
}
const per = new Person("张三", 20);
console.log(per);
// class Dog{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   bark(){
//     console.log(this.name+" is barking");
//   }
// }
// const dog=new Dog("小黑");
class Animal {
    constructor(name) {
        this.name = name;
    }
    //定义类的方法
    sayHello() {
        console.log(`Hello,${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    //重写父类的方法
    sayHello() {
        console.log(this.name + " is saying hello");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sayHello() {
        console.log(this.name + " is saying hello");
    }
}
const dog = new Dog("小黑");
const cat = new Cat("小白");
dog.sayHello();
cat.sayHello();

class Person {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello, " + this.name);
    }
}
interface myInterface {
    name:string;
    sayHello():void;
}
class Student implements myInterface {
    name:string
    constructor(name:string) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello, " + this.name);
    }
}

class Animal {
    private _name:string;
    constructor(name:string) {
        this._name = name;
    }
    sayHello() {
        console.log("Hello, " + this._name);
    }
    get name():string {
        return this._name;
    }
    set name(name:string) {
        this._name = name;
    }
}
const animal = new Animal("Dog");
console.log(animal.name);
animal.name="Cat";
console.log(animal.name);
class Cat{
    constructor(public _name:string,public _age:number){
    }
    
}
const cat = new Cat("小白",3);
console.log(cat._name,cat._age);



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
//抽象类的定义
abstract class Tree{
    abstract name:string;
    abstract age:number;
    abstract sayHello():void;
}
class LemonTree extends Tree{
    name:string;
    age:number;
    constructor(name:string,age:number){
        super();
        this.name=name;
        this.age=age;
    }
    sayHello(){
        console.log("Hello, " + this.name);
    }
}
const tree = new LemonTree("小柠檬",3);
console.log(tree.name,tree.age);
tree.sayHello();
// const tree=new Tree();//抽象类无法被实例化


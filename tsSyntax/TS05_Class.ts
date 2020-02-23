/* eslint-disable */
class Person {
    name = 'jw'
    protected age = 18
    say() {
        console.log(`My name is ${this.name}, I'm ${this.age} yrs old`)
    }
}

// const p = new Person();
// p.say();
// console.log(p.age)  // 只有在class中能夠調用

class Child extends Person {
    callParent() {
        console.log(super.age)  //為何無法訪問?
        super.say()
    }

    // constructor() {
    //     super();
    // }
}

const c = new Child();
console.log('c.callParent()', c.callParent());
// console.log(c.age)


export { };
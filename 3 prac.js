//console.log("The let keyword")
function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

//console.log("The const keyword")
function exampleConst() {
    const pi = 3.14159;
    pi = 3;
    console.log(pi);
}

//console.log("Arrow Functions")
const add = (a, b) => a + b;
console.log(add(2, 3));
const square = x => x * x;
console.log(square(4));

//console.log("The Spread Of... Operator")
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

//console.log("For/of")
const arr = [1, 2, 3];
for (const num of arr) {
    console.log(num);
}

//console.log("Map Objects")
const myMap = new Map();
myMap.set('name', 'jiya');
myMap.set('age', 30);
console.log(myMap.get('name'));
console.log(myMap.size);

//console.log("Set Objects")
const mySet = new Set([1, 2, 2, 3, 3, 4]);
console.log(mySet);

//console.log("Classes")
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, My Name is ${this.name}`);
    }
}

const Keval = new Person('jiya');
Keval.sayHello();

//console.log("Promises")
function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Operation successful'), 1000);
    });
}

asyncFunction().then(result => console.log(result));

//console.log("Symbol")
const mySymbol = Symbol('description');
const obj = { [mySymbol]: 'value' };
console.log(obj[mySymbol]);

//console.log("Default Parameters")
function greet(name = 'User') {
    console.log(`Hello, ${name}`);
}

greet();
greet('jiya');

//console.log("Function Rest Parameter")
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3))
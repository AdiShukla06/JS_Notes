// Objects in JS

// Objects are a collection of key-value pairs. The keys are strings and the values can be anything.

// Creating an object

let person = {
    name: 'Aditya',
    age: 21,
    isMarried: false,
    greet: function() {
        console.log('Hello ' + this.name);
    }
};

console.log(person.name)
person.greet();

let car = new Object();
car.brand = 'Audi';
car.model = 'A4';
car.start = function(){
    console.log(this.brand + ' is starting');
    
}

console.log(car.brand)
car.start();

// Accessing object properties

console.log(person.name);
console.log(person['name']);


// Adding properties to an object

person.country = 'India';
console.log(person.country); //India

// Deleting properties from an object

delete person.country;
console.log(person.country); //undefined

// Nested Objects

let student = {
    name: 'Aditya',
    age: 21,
    address: {
        city: 'Noida',
        state: 'UP'
    }
};

console.log(student.address.city); //Noida

// Methods in objects

let calculator = {
    add : function(a, b){
        return a + b;
    },
    subtract : function(a, b){
        return a - b;
    }
};

console.log(calculator.add(5, 3)); //8
console.log(calculator.subtract(5, 3)); //2

// 'this' keyword

let person1 = {
    name: 'Aditya',
    age: 21,
    greet: function() {
        console.log('Hello ' + this.name);
    }
};
person1.greet(); //Hello Aditya

// dynamic property names (ES6)

let propName = 'age'
let user = {
    name: 'Aditya',
    [propName]: 21
}
console.log(user.age); //21

// Object Methods 

// Object.keys()

let person2 = {
    name: 'Aditya',
    age: 21
};

console.log(Object.keys(person2)); //['name', 'age']

// Object.values()

console.log(Object.values(person2)); //['Aditya', 21]

// Object.entries()

console.log(Object.entries(person2)); //[['name', 'Aditya'], ['age', 21]]

// Object.assign()

let person3 = {
    name: 'Aditya',
    age: 21
};
Object.assign(person3, {isMarried: false});
console.log(person3); //{name: 'Aditya', age: 21, isMarried: false}

// Object.freeze()

let person4 = {
    name: 'Aditya',
    age: 21
};
Object.freeze(person4);
person4.age = 22;
console.log(person4.age); //21

// Object.seal()

let person5 = {
    name: 'Aditya',
    age: 21
};
Object.seal(person5);
person5.age = 22;
delete person5.name;
console.log(person5); //{name: 'Aditya', age: 22}

// Object.create()

let person6 = Object.create({name: 'Aditya', age: 21});
console.log(person6.name); //Aditya

// Object.defineProperty()

let person7 = {};
Object.defineProperty(person7, 'name', {
    value: 'Aditya',
    writable: false
}); 
person7.name = 'John'; //won't work because writable is set to false
console.log(person7.name); //Aditya

// Comparing Objects

let obj1 = {
    name: 'Aditya',
    age: 21
};
let obj2 = {
    name: 'Aditya',
    age: 21
};
console.log(obj1 === obj2); //false

let obj3 = obj1;
console.log(obj1 === obj3); //true

// in Operator

let person8 = {
    name: 'Aditya',
    age: 21
};
console.log('name' in person8); //true
console.log('country' in person8); //false

// Iterating over objects

// for...in loop

let person9 = {
    name: 'Aditya',
    age: 21
};
for(let key in person9){
    console.log(key, person9[key]);
}

// Object.keys() and forEach()

Object.keys(person9).forEach(function(key){
    console.log(key, person9[key]);
});

// Object Cloning

let person10 = {
    name: 'Aditya',
    age: 21
};
let clone = Object.assign({}, person10);
console.log(clone); //{name: 'Aditya', age: 21}

let clone2 = {...person10};
console.log(clone2); //{name: 'Aditya', age: 21}

// both are shallow copies which means that if the object has nested objects, they will be shared between the original and the clone.

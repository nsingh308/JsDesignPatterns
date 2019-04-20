const PersonBuilder = require('./PersonBuilder');

let nav = new PersonBuilder('Navdeep')
        .makeEmployee()
        .makeManager(3400)
        .build();
//let amit = new Person('Amit',true,true,13400);


let amit = new PersonBuilder('Amit')
        .makeEmployee()
        .makeManager(13400)
        .build();

let testEmp = new PersonBuilder('test').build();

console.log(nav.toString())
console.log(amit.toString())
console.log(testEmp.toString())
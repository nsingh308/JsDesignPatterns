const Shopper = require('./Shopper');
const Store = require('./Store');
const Mall = require('./Mall');

let animalStore = new Store('Animal Store');
let clothsStore = new Store('Cloths Store');

let alex = new Shopper('Alex');
let john = new Shopper('John');
let tina = new Shopper('Tina');
let happy = new Shopper('Happy');

let ambienceMall = new Mall();


animalStore.subscribe(alex);
animalStore.subscribe(john);
animalStore.subscribe(happy);
clothsStore.subscribe(tina);
animalStore.subscribe(ambienceMall);
clothsStore.subscribe(ambienceMall);

animalStore.sale(20)
clothsStore.sale(30)

console.log(ambienceMall.sales);




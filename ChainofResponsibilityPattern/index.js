const Store = require('./Store');
const inventory = require('./inventory');

const skieStore=  new Store('First Class Shop',inventory.floor);

const search='Phone Charger MI';
let result = skieStore.find(search)

if(result){
    console.log(result)
}else{
    console.error(`Could not find the item ${search}`);
}


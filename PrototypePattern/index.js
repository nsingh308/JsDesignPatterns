const proto = require('./Shopper_Prototype')

let navdeep = proto.clone();
navdeep.name='Navdeep'
navdeep.addListItem('Towel');

let sangeeta = proto.clone();
sangeeta.name='Sangeeta'
sangeeta.addListItem('pajama');

console.log(`${navdeep.name} : ${navdeep.shoppingList}`)
console.log(`${sangeeta.name} : ${sangeeta.shoppingList}`)

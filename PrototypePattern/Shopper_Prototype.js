const Shopper = require('./Shopper')

let proto = new Shopper();

proto.addListItem('Butter');
proto.addListItem('Bread');
proto.addListItem('Knife');
proto.addListItem('Spoon');

module.exports=proto;
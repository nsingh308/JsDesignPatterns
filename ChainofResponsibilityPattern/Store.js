const inventory = require('./inventory')
const Storage = require('./Storage');

class Store{

    constructor(name){
        
        this.name= name;

        let floor = new Storage('floor',inventory.floor,0);
        let backroom = new Storage('backroom',inventory.backroom,0);
        let localstore = new Storage('localstore',inventory.localstore,1);
        let warehouse = new Storage('warehouse',inventory.warehouse,2);

        floor.setNext(backroom);
        backroom.setNext(localstore);
        localstore.setNext(warehouse);

        this.storage= floor;
        
    }

    find(itemName){
        return this.storage.find(itemName);
    }
}
module.exports= Store;
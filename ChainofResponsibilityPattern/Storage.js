
class Storage{

    constructor(name, inventory=[], deliveryTime){

        this.name= name;
        this.inventory=inventory;
        this.deliveryTime= deliveryTime;
        this.next= null;
    }

    setNext(storage){
        this.next= storage
    }

    find(itemName){

        let found = this.lookInLocalInventory(itemName);
        if(found){
            return found;
        }else if(this.next){
            return this.next.find(itemName)
        }else{
            return undefined;
        }
    }

    lookInLocalInventory(itemName){
        var index= this.inventory.map(item=>item.name).indexOf(itemName);
        return this.inventory[index]; 
    }

}

module.exports=Storage;
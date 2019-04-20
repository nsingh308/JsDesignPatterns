/**
 * Observer which has subscribed to Observable for state change.
 */
class Shopper{

    constructor(name){
        this.name = name;
    }

    notify(storeName, discount){
        console.log(`Mr./Ms. ${this.name}, ${storeName} has been opend discount of ${discount}`)
    }
}

module.exports=Shopper;
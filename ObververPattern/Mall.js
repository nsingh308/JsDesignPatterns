/**
 * Observer which has subscribed to Observable for state change.
 */
class Mall{

    constructor(name){
        this.name = name;
        this.sales=[];
    }
    notify(storeName, discount){
        this.sales.push({storeName,discount})
        //console.log(`Mr./Ms. ${this.name}, ${storeName} has been opend discount of ${discount}`)
    }
}

module.exports=Mall;
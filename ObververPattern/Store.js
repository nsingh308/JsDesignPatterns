/**
 * Observable, which would change its state.
 */
class Store{

    constructor(name){
        this.name = name;
        this.subscribers= [];
    }


    subscribe(observer){
        this.subscribers.push(observer);
    }

    sale(discount){
        //console.log(`Announces sale at ${this.name} for discount of ${discount}%`)
        this.subscribers.forEach(observer => {
            observer.notify(this.name,discount)
        });
    }
}

module.exports=Store;
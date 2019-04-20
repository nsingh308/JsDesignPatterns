class Shopper{

    constructor(name='Unamed Shopper'){
        this._name= name;
        this._shoppingList = [];
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name=value;
    }

    addListItem(item){
        this._shoppingList.push(item);
    }

    get shoppingList(){
        return this._shoppingList.join(', ');
    }

    clone(){
        let proto= Object.getPrototypeOf(this);
        let clonned = Object.create(proto);

        clonned._name = this._name;
        clonned._shoppingList = [...this._shoppingList];
        return clonned;
    }
}

module.exports=Shopper;
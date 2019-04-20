

class Person{

    constructor(builder){
        this._name = builder._name;
        this._employee= builder.isEmployee;
        this._manager = builder.isManager;
        this._pay= builder._pay;
    }

    toString(){
        return JSON.stringify(this)
    }

}


module.exports=Person;
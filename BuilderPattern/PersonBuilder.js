const Person = require('./Person')

class PersonBuilder{

    constructor(name){
        this._name = name;
    }

    makeEmployee(){
        this.isEmployee= true;
        return this;
    }

    makeManager(pay){
        this.isManager = true;
        this._pay= pay || 0;
        return this;
    }

    build(){
        return new Person(this);
    }

    

}

module.exports= PersonBuilder;
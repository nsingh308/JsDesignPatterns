const LogStretegy = require('./LogStretegy')

class Logger{

    constructor(){
        this.stretegy = LogStretegy.toConsole;
    }

    changeStretegy(newStretegy){
        this.stretegy= LogStretegy[newStretegy];
    }
    
    log(message){
        const timestamp = new Date().toISOString();
        //console.log(`${timestamp} - ${message}`)
        this.stretegy(timestamp,message)
    }
}

module.exports= new Logger();
const LogStretegy = require('./LogStretegy')

class Logger{

    constructor(){
        
    }

    log(message){
        const timestamp = new Date().toISOString();
        console.log(`${timestamp} - ${message}`)
        
    }
}
//Below export will always return a single instance of the Logger.
//can be tested by adding array of current instances in the log method above.
module.exports= new Logger();
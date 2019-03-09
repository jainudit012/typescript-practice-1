enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG

function LogMethod(level:LoggingLevel):Function{
    return (target:any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        const originalFunction:Function = descriptor.value
        // console.log('target => ',target)
        // console.log('propertyKey => ',propertyKey)
        // console.log('descriptor => ',descriptor)
        descriptor.value = function (...args:any[]){
            if(level===loggingLevel){
                console.log(`>> ${propertyKey} ${args}`)
            }
            originalFunction.apply(this, args)
        }
    }
}

class Databse {
    name='DATABSE URL OR NAME'
    @LogMethod(LoggingLevel.INFO)
    saveData(data:string):void{
        console.log(`Saving data to the database ${this.name}:  ${data}`)
    }
}

const db = new Databse()
db.saveData('entry 1')
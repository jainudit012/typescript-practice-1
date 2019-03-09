type MessageCreator = (name:string) => string
type MessageCreator2 = (name:string, num:number) => string
function createMessage(data:string, extra?: number){
    return `Hello ${data}! ${extra}!`
}

const message : MessageCreator = createMessage
const message2 : MessageCreator2 = createMessage
console.log(message('hiiiîiîîîîîîîîîî'))
console.log(message2('john', 2))
console.log(createMessage('0'))
"use strict";
function createMessage(data, extra) {
    return "Hello " + data + "! " + extra + "!";
}
var message = createMessage;
var message2 = createMessage;
console.log(message('hiiiîiîîîîîîîîîî'));
console.log(message2('john', 2));
console.log(createMessage('0'));
//# sourceMappingURL=sample-2.js.map
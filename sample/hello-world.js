"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildName_1 = require("./buildName");
var name1 = {
    firstName: 'Udit',
    lastName: 'Jain'
};
var partialAddr = ['660 Indira Nagar'];
var colony = ['Colony'];
var address = partialAddr.concat([colony]);
console.log('Address: ', address);
console.log(buildName_1.buildName(name1, address));
//# sourceMappingURL=hello-world.js.map
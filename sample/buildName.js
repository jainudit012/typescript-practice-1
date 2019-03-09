"use strict";
// module.exports = function buildName({firstName, lastName}, ...address){
//  return `${firstName} ${lastName}, address: ${address}`
// }
Object.defineProperty(exports, "__esModule", { value: true });
function buildName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return firstName + " " + lastName + ", address: " + address;
}
exports.buildName = buildName;
exports.DEMO = 'demo!';
// module.exports = buildName
//# sourceMappingURL=buildName.js.map
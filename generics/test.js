"use strict";
var data = [
    { name: 'BOB' },
    { name: 'TIM' },
    { name: 'JOHN' }
];
function cloneArray(array) {
    return array.slice(0);
}
var clones = cloneArray(data);
var clones2 = cloneArray([1, 2, 3, 4, 5]);
console.log(clones);
console.log(clones2);
//# sourceMappingURL=test.js.map
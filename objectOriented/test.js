"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Editor;
(function (Editor) {
    Editor[Editor["DC"] = 0] = "DC";
    Editor[Editor["MARVEL"] = 1] = "MARVEL";
})(Editor || (Editor = {}));
var batman = {
    name: 'Batman',
    year: 1991
};
var SuperHero = /** @class */ (function () {
    function SuperHero(name, _editor, year) {
        this._editor = _editor;
        this.year = year;
        this.name = name;
        this._editor = _editor;
    }
    // abstract createMessage():string
    // createMessage(){
    //     return `Super Hero Is: ${this.name}`
    // }
    SuperHero.createMessage = function (hero) {
        return this.Label + " " + hero.name + " " + Editor[hero._editor] + " " + hero.year;
    };
    SuperHero.Label = 'HERO: ';
    return SuperHero;
}());
var FlyingHero = /** @class */ (function (_super) {
    __extends(FlyingHero, _super);
    function FlyingHero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingHero.prototype.console = function (str) {
        return "Flying Hero is: " + str + " " + this.name + " " + this.year;
    };
    Object.defineProperty(FlyingHero.prototype, "editor", {
        get: function () {
            return Editor[this._editor];
        },
        set: function (editorName) {
            this._editor = Editor[editorName];
        },
        enumerable: true,
        configurable: true
    });
    FlyingHero.prototype.fly = function (message) {
        console.log(message + " " + this.year);
    };
    return FlyingHero;
}(SuperHero));
var heman = new FlyingHero('He Man', Editor.MARVEL, 1998);
// const superman = new SuperHero('Superman', Editor.DC, 1990)
// console.log(superman)
// heman.editor = 'something'
console.log(heman);
// console.log(superman.createMessage())
console.log(SuperHero.createMessage(heman));
console.log(heman.console('This string is a bonus string. Do enjoy!'));
heman.fly('string message');
// console.log(heman.year)
//# sourceMappingURL=test.js.map
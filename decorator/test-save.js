"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["INFO"] = 0] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 1] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 2] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 3] = "TRACE";
})(LoggingLevel || (LoggingLevel = {}));
var loggingLevel = LoggingLevel.DEBUG;
function LogMethod(level) {
    return function (target, propertyKey, descriptor) {
        var originalFunction = descriptor.value;
        // console.log('target => ',target)
        // console.log('propertyKey => ',propertyKey)
        // console.log('descriptor => ',descriptor)
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level === loggingLevel) {
                console.log(">> " + propertyKey + " " + args);
            }
            originalFunction.apply(this, args);
        };
    };
}
var Databse = /** @class */ (function () {
    function Databse() {
        this.name = 'DATABSE URL OR NAME';
    }
    Databse.prototype.saveData = function (data) {
        console.log("Saving data to the database " + this.name + ":  " + data);
    };
    __decorate([
        LogMethod(LoggingLevel.INFO)
    ], Databse.prototype, "saveData", null);
    return Databse;
}());
var db = new Databse();
db.saveData('entry 1');
//# sourceMappingURL=test.js.map
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
var SuperCharacter = /** @class */ (function () {
    function SuperCharacter(name) {
        this.name = name;
        this.name = name;
    }
    return SuperCharacter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hero;
}(SuperCharacter));
var Villain = /** @class */ (function (_super) {
    __extends(Villain, _super);
    function Villain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Villain;
}(SuperCharacter));
var SuperTeam = /** @class */ (function () {
    function SuperTeam(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeam;
}());
var captain = new Hero('Captain America');
var bat = new Hero('BatMan');
var green = new Hero('Green Lantern');
var ivy = new Villain('Poison Ivy');
var hydra = new Villain('Hydra');
var magnet = new Villain('Magneto');
var ATeam = new SuperTeam([captain, bat, green], captain);
var members = ATeam.members;
var BTeam = new SuperTeam([ivy, hydra, magnet], magnet);
var members2 = BTeam.members;
var CTeam = new SuperTeam([captain, bat, green, ivy, hydra, magnet], captain);
var members3 = CTeam.members;
//# sourceMappingURL=test2.js.map
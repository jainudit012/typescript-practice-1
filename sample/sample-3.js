"use strict";
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["Forward"] = 0] = "Forward";
    PlayerPosition[PlayerPosition["Guard"] = 1] = "Guard";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
var p1 = ['player 1', PlayerPosition.Center];
var p2 = ['Player 2', PlayerPosition['Forward']];
var p3 = ['Player 3', PlayerPosition.Guard];
var players = [p1, p2, p3];
console.log(players);
//# sourceMappingURL=sample-3.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require('human-readable-ids').hri;
function DatabaseError(res, err) {
    var id = hri.random();
    console.error('Database Error-', id, err);
    return res.status(500).send({ error: true, reason: "Lesson Creation failed ; error - " + id });
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=onDbError.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onError(res, err) {
    console.log(err);
    return res.status(500).send({ error: true, reason: err.message });
}
exports.onError = onError;
//# sourceMappingURL=onError.js.map
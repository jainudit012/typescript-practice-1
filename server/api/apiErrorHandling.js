"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    console.log('API ERROR', err);
    return res.status(500).send({ error: true, reason: err.message });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=apiErrorHandling.js.map
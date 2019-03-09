"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var createOneLesson_1 = require("./createOneLesson");
var onDbError_1 = require("./onDbError");
var updateOneLesson_1 = require("./updateOneLesson");
var deleteLesson_1 = require("./deleteLesson");
var _ = __importStar(require("lodash"));
function createLesson(req, res) {
    // // throw new Error('Erorroror  fwejfwf!!!')
    createOneLesson_1.createOneLesson(req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onDbError_1.DatabaseError, res))
        .catch(_.partial(onError_1.onError, res));
}
exports.createLesson = createLesson;
function patchLesson(req, res) {
    updateOneLesson_1.updateLesson(req.params.id, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onDbError_1.DatabaseError, res))
        .catch(_.partial(onError_1.onError, res));
}
exports.patchLesson = patchLesson;
function deleteLesson(req, res) {
    deleteLesson_1.deleteOneLesson(req.params.id)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onDbError_1.DatabaseError, res))
        .catch(_.partial(onError_1.onError, res));
}
exports.deleteLesson = deleteLesson;
//# sourceMappingURL=lessons.js.map
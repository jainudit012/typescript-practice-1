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
var findAllCourses_1 = require("../queries/findAllCourses");
var findCourse_1 = require("../queries/findCourse");
var _ = __importStar(require("lodash"));
function get(req, res) {
    // throw new Error('Erorroror  fwejfwf!!!')
    findAllCourses_1.findAllCourses()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res));
}
exports.get = get;
function getOne(req, res) {
    var id = req.params.id;
    findCourse_1.findCourse(id)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res));
}
exports.getOne = getOne;
//# sourceMappingURL=courses.js.map
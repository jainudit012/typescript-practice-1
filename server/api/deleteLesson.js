"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function deleteOneLesson(id) {
    return model_1.LessonModel.destroy({ where: { id: id } });
}
exports.deleteOneLesson = deleteOneLesson;
//# sourceMappingURL=deleteLesson.js.map
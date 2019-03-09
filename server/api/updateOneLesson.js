"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function updateLesson(id, data) {
    return model_1.LessonModel.update(data, { where: { id: id } });
}
exports.updateLesson = updateLesson;
//# sourceMappingURL=updateOneLesson.js.map
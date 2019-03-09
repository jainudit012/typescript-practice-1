"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var createCourseDetail_1 = require("../../shared/model/createCourseDetail");
function findCourse(id) {
    return model_1.CourseModel.findById(id, {
        include: [{
                model: model_1.LessonModel
            }]
    }).then(createCourseDetail_1.createCourseDetail);
}
exports.findCourse = findCourse;
//# sourceMappingURL=findCourse.js.map
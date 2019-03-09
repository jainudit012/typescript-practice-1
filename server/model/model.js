"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var courses_1 = require("./courses");
var lesson_1 = require("./lesson");
var dbUrl = 'postgres://sim:postgres@localhost:5432/typescript';
var sequelized = new sequelize_1.default(dbUrl);
exports.CourseModel = courses_1.initModelCourse(sequelized);
exports.LessonModel = lesson_1.initLesson(sequelized);
exports.CourseModel.hasMany(exports.LessonModel, { foreignKey: 'courseId' });
exports.LessonModel.belongsTo(exports.CourseModel, { foreignKey: 'courseId' });
//# sourceMappingURL=model.js.map
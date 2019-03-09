"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = __importStar(require("sequelize"));
function initLesson(sequelize) {
    return sequelize.define('Lesson', {
        description: ORM.STRING,
        url: ORM.STRING,
        duration: ORM.STRING,
        courseId: ORM.INTEGER,
        seqNo: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING
    });
}
exports.initLesson = initLesson;
//# sourceMappingURL=lesson.js.map
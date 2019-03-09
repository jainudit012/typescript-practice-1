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
function initModelCourse(sequelize) {
    return sequelize.define('Course', {
        description: ORM.STRING,
        url: ORM.STRING,
        longDescription: ORM.STRING,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN
    });
}
exports.initModelCourse = initModelCourse;
//# sourceMappingURL=courses.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourseSummary(_a) {
    var id = _a.id, description = _a.description, url = _a.url, iconUrl = _a.iconUrl, courseListIcon = _a.courseListIcon, seqNo = _a.seqNo;
    return { id: id, description: description, url: url, iconUrl: iconUrl, courseListIcon: courseListIcon, seqNo: seqNo };
}
exports.createCourseSummary = createCourseSummary;
function createCourseSummaries(data) {
    return data.map(createCourseSummary);
}
exports.createCourseSummaries = createCourseSummaries;
//# sourceMappingURL=course-summary.js.map
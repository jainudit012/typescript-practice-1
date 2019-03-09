"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var courses_1 = require("./courses");
var lessons_1 = require("./lessons");
function initApi(app) {
    app.route('/api/courses').get(courses_1.get);
    app.route('/api/course/:id').get(courses_1.getOne);
    app.route('/api/lesson').post(lessons_1.createLesson);
    app.route('/api/lesson/:id').patch(lessons_1.patchLesson);
    app.route('/api/lesson/:id').delete(lessons_1.deleteLesson);
}
exports.initApi = initApi;
//# sourceMappingURL=api.js.map
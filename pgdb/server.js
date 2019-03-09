"use strict";
// const sequelize = require('sequelize')
// import * as ORM from 'sequelize'
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../server/model/model");
console.log(model_1.CourseModel.findAll());
console.log('#################');
model_1.CourseModel.findAll().then(function (res) {
    console.log(JSON.stringify(res));
    console.log('#################');
});
console.log('Server is runing...');
//# sourceMappingURL=server.js.map
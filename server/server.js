"use strict";
// const sequelize = require('sequelize')
// import * as ORM from 'sequelize'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("./api/api");
var apiErrorHandling_1 = require("./api/apiErrorHandling");
var bodyParser = require('body-parser');
var app = express_1.default();
app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
app.use(bodyParser.json());
api_1.initApi(app);
app.use(apiErrorHandling_1.errorHandler);
// findAllCourses().then(res=> {
//     console.log(JSON.stringify(res))
//     console.log('#################')
// })
console.log('Server is runing...');
//# sourceMappingURL=server.js.map
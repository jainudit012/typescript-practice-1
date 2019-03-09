import sequelize from 'sequelize'
import {Sequelize} from 'sequelize'
import { initModelCourse } from './courses'
import { initLesson } from './lesson';

const dbUrl = 'postgres://sim:postgres@localhost:5432/typescript'

const sequelized:Sequelize = new sequelize(dbUrl)

export const CourseModel = initModelCourse(sequelized)
export const LessonModel = initLesson(sequelized)

CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'})
LessonModel.belongsTo(CourseModel, {foreignKey: 'courseId'})